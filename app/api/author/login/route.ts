

import connectDb from "@/config/bd";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds

export async function POST(req: Request) {
    try {
        const { email, password, role } = await req.json();
        await connectDb();

        const user = await User.findOne({ email });
        if (!user || user.role !== role) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
        }

        // Check if account is locked
        if (user.lockUntil && user.lockUntil > Date.now()) {
            const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 60000); // Minutes remaining
            return NextResponse.json({ error: `Account locked. Try again in ${remainingTime} minutes.` }, { status: 403 });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            user.loginAttempts = (user.loginAttempts || 0) + 1;

            if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
                user.lockUntil = Date.now() + LOCK_TIME; // Lock account
            }

            await user.save();
            return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
        }

        // Reset failed login attempts
        user.loginAttempts = 0;
        user.lockUntil = undefined;
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, name: user.name },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
