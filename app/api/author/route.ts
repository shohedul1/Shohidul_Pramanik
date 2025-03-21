import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import connectDb from "@/config/bd";
import User from "@/models/User";
import generateToken from "@/config/generateToken/generateToken";
import jwt from 'jsonwebtoken';


const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds

export async function POST(req: NextRequest) {
    await connectDb();
    try {
        const body = await req.json();
        const { email, password, endpoint, role } = body;

        if (endpoint === "signup") {
            const { name, email, password } = body;
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return NextResponse.json({ error: "User already exists" }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, role, password: hashedPassword, loginAttempts: 0 });
            await newUser.save();

            return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
        }

        if (endpoint === "login") {
            const user = await User.findOne({ email });

            if (!user || user.role !== role) {
                return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
            }

            // 1️⃣ **Check if account is locked**
            if (user.lockUntil && user.lockUntil > Date.now()) {
                const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 60000); // Minutes remaining
                return NextResponse.json({ error: `Account locked. Try again in ${remainingTime} minutes.` }, { status: 403 });
            }

            // 2️⃣ **Validate password**
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                user.loginAttempts += 1;

                // 3️⃣ **Lock account after 5 failed attempts**
                if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
                    user.lockUntil = Date.now() + LOCK_TIME; // Lock for 30 minutes
                }

                await user.save();
                return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
            }
            const accessToken = generateToken(user);

            // Set auth token in cookies using NextResponse.cookies.set()
            const response = NextResponse.json({ message: "Login successful", user }, { status: 200 });
            response.cookies.set("auth_token", accessToken, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
            });

            // 4️⃣ **Reset login attempts on successful login**
            user.loginAttempts = 0;
            user.lockUntil = undefined;
            await user.save();

            return response;
        }

        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('auth_token')?.value; // Ensure correct cookie name

        if (!token) {
            return NextResponse.json({ error: "No token found, user is not authenticated" }, { status: 401 });
        }

        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string); // Type assertion if needed

        // Check if decoded userId exists
        if (!decoded || !decoded.userId) {
            return NextResponse.json({ error: "Invalid token, userId not found" }, { status: 401 });
        }

        const user = await User.findById(decoded.userId).select("-password"); // Exclude password field

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User fetched successfully", user }, { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);

        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
