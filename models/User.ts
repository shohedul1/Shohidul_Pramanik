
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "client", "admin"], required: true },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Number }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

