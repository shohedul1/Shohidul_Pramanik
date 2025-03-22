import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "client", "admin"], required: true },
    avatar: { type: String, default: "/default-avatar.png" }, // Added avatar field to store the user's profile image URL
    username: { type: String, default: "" }, // Added a field for the username
    createdAt: { type: Date, default: Date.now }, // Automatically adds the creation date
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Number }
});

// Ensure the model uses the schema if it doesn't exist yet
export default mongoose.models.User || mongoose.model("User", UserSchema);
