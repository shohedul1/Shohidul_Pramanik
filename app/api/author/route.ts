import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import connectDb from "@/config/bd";
import User from "@/models/User";

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes

export async function POST(req: NextRequest) {
    await connectDb();
    try {
        const body = await req.json();
        const { email, password, endpoint, role } = body;
        console.log(body)
        if (endpoint === "signup") {
            const { name, email, password } = body;
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return NextResponse.json({ error: "User already exists" }, { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, role, password: hashedPassword });
            await newUser.save();

            return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
        }

        if (endpoint === "login") {
            const user = await User.findOne({ email });
            console.log("login", user)

            if (!user) {
                return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
            }
            if (user.role !== role) {
                return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });

            }

            if (user.lockUntil && user.lockUntil > Date.now()) {
                return NextResponse.json({ error: "Account locked. Try again later." }, { status: 400 });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                user.loginAttempts += 1;
                if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
                    user.lockUntil = Date.now() + LOCK_TIME;
                }
                await user.save();
                return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
            }

            user.loginAttempts = 0;
            user.lockUntil = undefined;
            await user.save();

            return NextResponse.json({ message: "Login successful", user }, { status: 200 });
        }

        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
