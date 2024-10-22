"use server";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const body = await req.json();
  const { username, password } = body;

  // Example credentials (replace with your env variables or another secure method)
  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "password";

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    // Create JWT token
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET || "my-secret-key",
      { expiresIn: "1h" } // Expires in 1 hour
    );

    // Set the JWT token as a cookie
    const response = NextResponse.json({ success: true });

    // Set the cookie with the JWT token
    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "Strict",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    // Return the response
    return response;
  } else {
    // If credentials are invalid, return a 401 response
    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }
}
