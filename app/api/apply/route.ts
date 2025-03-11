import { NextRequest, NextResponse } from "next/server";
import Application from "@/models/Application";
import connectDb from "@/config/bd";

export async function POST(req: NextRequest) {
    await connectDb();

    try {
        const body = await req.json();
        const { name, email, phone, selectedPlan } = body;

        if (!name || !email || !phone || !selectedPlan) {
            return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
        }

        const newApplication = await Application.create({ name, email, phone, selectedPlan });

        return NextResponse.json({ success: true, message: "Application submitted successfully", data: newApplication }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
