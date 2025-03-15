import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number },
    role: { type: String, required: true }, // <-- Add role field here
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
