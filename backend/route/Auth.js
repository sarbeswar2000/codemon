const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const OTP = require("../model/Otp");
const router = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hithisis$sarbeswar";

const transporter = nodemailer.createTransport ({
  service: 'gmail',
   secure:true,
  auth: {
    user: "sarbeswar58behera@gmail.com",
    pass: "uqdp xgav gzgv vunb"
  }
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

router.post(
  "/createuser",
  [
    body("name", "Enter the name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("course","Enter a valid course name"),
    body("rollno","Enter your valid rollno"),
    body("telephone", "Enter a valid telephone number")
    .isLength({ min: 10, max: 10 }) 
    .isNumeric(),
    body("password", "Password must be at least 8 characters").isLength({
      min: 8,
    }),  
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 

    try {
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
        course:req.body.course,
        rollno:req.body.rollno,
        telephone:req.body.telephone,
        password:secPass,
      });

      await OtpEntry.save();

      const mailOptions = {
        from: 'sarbeswar58behera@gmail.com',
        to: req.body.email,
        subject: 'Your OTP for registration',
        text: `Your OTP is ${Otp}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending OTP:", error);
          return res.status(400).send("Error sending OTP");
        } else {
          console.log("Email sent:", info.response);
          success = true;
          res.json({ success, message: "OTP sent to your email" });
        }
      });

      
    } catch (error) {
      console.error("Internal Server Error:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post("/verifyotp", [
  body("email", "Enter a valid email").isEmail(),
  body("otp", "Enter a valid OTP").isLength({ min: 6, max: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const OtpEntry = await OTP.findOne({ email: req.body.email, otp: req.body.otp });

    if (!OtpEntry) {
      return res.status(400).json({ error: "Invalid OTP" });
    }
    const user = await User.create({
      name: OtpEntry.name,
      email: OtpEntry.email,
      course:OtpEntry.course,
      rollno:OtpEntry.rollno,
      telephone:OtpEntry.telephone,
      password: OtpEntry.password,
    });
    const data = {
      user: {
        id: user.id,
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET);

    // Delete OTP entry after successful verification
    await OTP.deleteOne({ email: req.body.email, otp: req.body.otp });

    res.json({ success: true, authtoken });
  } catch (error) {
    console.error("Internal Server Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

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
        from: "sarbeswar58behera@gmail.com",
        to: req.body.email,
        subject: "Your OTP for password reset",
        text: `Your OTP is ${Otp}`,
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
    body("newPassword", "Password must be at least 8 characters long").isLength({
      min: 8,
    }),
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
      // const currentTime = Date.now();
      // const otpCreatedAt = new Date(OtpEntry.createdAt).getTime();
      // const otpExpiryTime = 15 * 60 * 1000; // e.g., 15 minutes
      // if (currentTime - otpCreatedAt > otpExpiryTime) {
      //   return res.status(400).json({ error: "OTP expired" });
      // }

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


module.exports = router;
