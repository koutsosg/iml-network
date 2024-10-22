"use server";
import { NextResponse } from "next/server";

export async function POST() {
  // Create a response to clear the authToken cookie
  const response = NextResponse.json({ success: true });

  // Set the cookie with maxAge of 0 to effectively delete it
  response.cookies.set({
    name: "authToken",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
    maxAge: 0, // This deletes the cookie
  });

  return response;
}
