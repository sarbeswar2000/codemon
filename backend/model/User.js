const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
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
  course: {
    type: String,
    required: [true, "Course is required"],
    trim: true,
  },
  rollno: {
    type: String,
    required: [true, "Roll number is required"],
    trim: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: [true, "Telephone number is required"],
    trim: true,
    match: [/^\d{10}$/, "Please fill a valid 10-digit telephone number"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the User model from the schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
