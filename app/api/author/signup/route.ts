import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import connectDb from "@/config/bd";
import User from "@/models/User";

export async function POST(req: NextRequest) {
    await connectDb();

    try {
        const body = await req.json();
        const { name, email, password, role } = body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            role,
            password: hashedPassword,
            loginAttempts: 0, // Ensure initialization
        });

        await newUser.save();

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
