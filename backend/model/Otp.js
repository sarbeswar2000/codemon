const mongoose = require("mongoose");
const { Schema } = mongoose;

const OtpSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  otp: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    trim: true,
  },
  rollno: {
    type: String,
    trim: true,
    unique: true,
  },
  telephone: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, "Please fill a valid 10-digit telephone number"],
  },
  password: {
    type: String,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: { type: Date, default: Date.now, expires:5 },
});

module.exports = mongoose.model("OTP", OtpSchema);
