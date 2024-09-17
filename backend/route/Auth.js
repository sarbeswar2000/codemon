const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const OTP = require("../model/Otp");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hithisis$sarbeswar";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: "codingclub@cuh.ac.in",
    pass: "wayc gypb aswi uzcs",
  },
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
// Updated OTP Email template for registration with an image
function otpEmailTemplateForRegistration(name, otp) {
  return `
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
      <h2>Welcome to the Coding Club, ${name}!</h2>
      <p>We are excited to have you join our community. To complete your registration, please use the following One-Time Password (OTP):</p>

      <div style="font-size: 24px; font-weight: bold; color: #1a73e8; margin: 20px 0;">
        🔑 Your OTP: <span style="color: #ff5722;">${otp}</span>
      </div>

      <p>This OTP is valid for the next 5 minutes. Please use it to verify your email and activate your account.</p>
      <p>If you didn’t request this registration, you can safely ignore this email.</p>

      <p>Looking forward to seeing you in the club!</p>
      <strong>Coding Club Team</strong><br>
      <a href="mailto:codingclub@cuh.ac.in">codingclub@cuh.ac.in</a>
    </div>
  `;
}

function otpEmailTemplateForReset(name, otp) {
  return `
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
      <h2>Hello, ${name}</h2>
      <p>We received a request to reset your password for your Coding Club account. If you made this request, please use the One-Time Password (OTP) below to proceed:</p>

      <div style="font-size: 24px; font-weight: bold; color: #1a73e8; margin: 20px 0;">
        🔑 Your OTP: <span style="color: #ff5722;">${otp}</span>
      </div>

      <p>This OTP is valid for the next 5 minutes.</p>
      <p>If you didn’t request a password reset, please contact us immediately.</p>

      <strong>Coding Club Team</strong><br>
      <a href="mailto:codingclub@cuh.ac.in">codingclub@cuh.ac.in</a>
    </div>
  `;
}

router.post(
  "/createuser",
  [
    body("name", "Enter the name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("course", "Enter a valid course name"),
    body("rollno", "Enter your valid rollno"),
    body("telephone", "Enter a valid telephone number")
      .isLength({ min: 10, max: 10 })
      .isNumeric(),
    body("password", "Password must be at least 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let existingOtp = await OTP.findOne({
        email: req.body.email,
        createdAt: { $gt: new Date(Date.now() - 5 * 60 * 1000) }, // Check if an OTP has been sent in the last 5 minutes
      });

      if (existingOtp) {
        return res
          .status(400)
          .json({ error: "OTP has already been sent. Please verify." });
      }

      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ errors: "Sorry, a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      const Otp = generateOTP();
      const OtpEntry = new OTP({
        email: req.body.email,
        otp: Otp,
        name: req.body.name,
        course: req.body.course,
        rollno: req.body.rollno,
        telephone: req.body.telephone,
        password: secPass,
      });

      const mailOptions = {
        from: "codingclub@cuh.ac.in",
        to: req.body.email,
        subject: "Your OTP for registration",
        html: otpEmailTemplateForRegistration(req.body.name, Otp),
      };

      await Promise.all([OtpEntry.save(), transporter.sendMail(mailOptions)]);

      console.log("OTP saved and Email sent");
      res.json({ success: true, message: "OTP sent to your email" });
    } catch (error) {
      console.error("Error in OTP saving or email sending:", error);
      res.status(500).send("Error occurred");
    }
  }
);

router.post(
  "/verifyotp",
  [
    body("email", "Enter a valid email").isEmail(),
    body("otp", "Enter a valid OTP").isLength({ min: 6, max: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const OtpEntry = await OTP.findOne({
        email: req.body.email,
        otp: req.body.otp,
      });

      if (!OtpEntry) {
        return res.status(400).json({ error: "Invalid OTP" });
      }
      const user = await User.create({
        name: OtpEntry.name,
        email: OtpEntry.email,
        course: OtpEntry.course,
        rollno: OtpEntry.rollno,
        telephone: OtpEntry.telephone,
        password: OtpEntry.password,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // Delete OTP entry after successful verification
      await OTP.deleteOne({ email: req.body.email, otp: req.body.otp });

      res.json({ success: true, authtoken });
    } catch (error) {
      console.error("Internal Server Error:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Log the email and password for debugging
      console.log(`Email: ${email}, Password: ${password}`);

      // Find user by email
      let user = await User.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // Compare passwords
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        console.log("Password mismatch");
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // Create JWT token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      success = true;
      res.json({ success, authtoken, name: user.name });
    } catch (error) {
      console.error("Error during login: ", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/forgetpassword",
  [body("email", "Enter a valid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }

      const Otp = generateOTP();
      const OtpEntry = new OTP({
        email: req.body.email,
        otp: Otp,
        name: null,
        course: null,
        rollno: null,
        telephone: null,
        password: null,
      });

      await OtpEntry.save();

      const mailOptions = {
        from: "codingclub@cuh.ac.in",
        to: req.body.email,
        subject: "Your OTP for password reset",
        html: otpEmailTemplateForReset(user.name, Otp),
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending OTP:", error);
          return res.status(400).send("Error sending OTP");
        } else {
          console.log("Email sent:", info.response);
          res.json({ success: true, message: "OTP sent to your email" });
        }
      });
    } catch (error) {
      console.error("Internal Server Error:", error); // Log the full error
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route: POST /resetpassword (Step 2: Reset Password using OTP)
// router.post(
//   "/resetpassword",
//   [
//     body("email", "Enter a valid email").isEmail(),
//     body("otp", "Enter a valid OTP").isLength({ min: 6, max: 6 }),
//     body("password", "Password must be at least 8 characters long").isLength({
//       min: 8,
//     }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const OtpEntry = await OTP.findOne({
//         email: req.body.email,
//         otp: req.body.otp,
//       });

//       if (!OtpEntry) {
//         return res.status(400).json({ error: "Invalid OTP" });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const secPass = await bcrypt.hash(req.body.password, salt);

//       await User.findOneAndUpdate(
//         { email: req.body.email },
//         { password: secPass }
//       );

//       // Delete OTP entry after successful password reset
//       await OTP.deleteOne({ email: req.body.email, otp: req.body.otp });

//       res.json({ success: true, message: "Password reset successful" });
//     } catch (error) {
//       console.error("Internal Server Error:", error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );
router.post(
  "/resetpassword",
  [
    body("email", "Enter a valid email").isEmail(),
    body("otp", "Enter a valid OTP").isLength({ min: 6, max: 6 }),
    body("newPassword", "Password must be at least 8 characters long").isLength(
      {
        min: 8,
      }
    ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const OtpEntry = await OTP.findOne({
        email: req.body.email,
        otp: req.body.otp,
      });

      if (!OtpEntry) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      // Optional: Check if OTP is expired based on createdAt timestamp
      const currentTime = Date.now();
      const otpCreatedAt = new Date(OtpEntry.createdAt).getTime();
      const otpExpiryTime = 5 * 60 * 1000; // 5 minutes
      if (currentTime - otpCreatedAt > otpExpiryTime) {
        return res.status(400).json({ error: "OTP expired" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.newPassword, salt);

      await User.findOneAndUpdate(
        { email: req.body.email },
        { password: secPass }
      );

      await OTP.deleteOne({ email: req.body.email, otp: req.body.otp });

      res.json({ success: true, message: "Password reset successful" });
    } catch (error) {
      console.error("Internal Server Error:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/sendFeedback",
  [
    // Validate user input
    body("name", "Enter a name with at least 3 characters").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email address").isEmail(),
    body("msg", "Message cannot be empty").notEmpty(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract data from request body
    const { name, email, msg } = req.body;

    // Define email options
    const mailOptions = {
      from: email, // Sender's email address
      to: "codingclub@cuh.ac.in", // Owner's email address
      subject: "Feedback from Coding Club", // Email subject
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`, // Email content
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Feedback sent successfully" });
    } catch (error) {
      console.error("Error sending feedback:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Error sending feedback" });
    }
  }
);
module.exports = router;
