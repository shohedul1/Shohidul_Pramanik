import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/config/bd";
import User from "@/models/User";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";
interface CustomJwtPayload extends jwt.JwtPayload {
    userId: string;
}

export async function GET(req: NextRequest) {
    try {
        await connectDb();
        const authHeader = req.headers.get("authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;
        console.log(decoded)

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Auth Error:", error);
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
}
