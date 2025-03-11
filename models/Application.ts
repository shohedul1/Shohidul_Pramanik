import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
    name: string;
    email: string;
    phone: string;
    selectedPlan: string;
    createdAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        selectedPlan: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.models.Application || mongoose.model<IApplication>("Application", ApplicationSchema);
