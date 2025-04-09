import mongoose from "mongoose";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { JWT_EXPIRES, JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  // session of mongoose transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, password } = req.body;

    // Check if a user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If the user exists, throw an error
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    // Hashing the password
    /*
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
    */
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUsers = await User.create(
      [{ name, email, password: hashedPassword }],
      {
        session,
      }
    );

    const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES,
    });

    // Commit the transaction
    await session.commitTransaction();

    // Close the session
    await session.endSession();

    // Send the token to the client
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      },
    });
  } catch (error) {
    // Rollback the transaction
    await session.abortTransaction();
    // Close the session
    await session.endSession();

    // Send the error to the error handling middleware
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES,
    });

    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      data: {
        token,
        user: user,
      },
    });
  } catch (error) {
    // Send the error to the error handling middleware
    next(error);
  }
};

export const signOut = async (req, res, next) => {};
