import jwt from "jsonwebtoken";

// Define the interface for the user
interface User {
    _id: string;  // Assuming _id is a string, adjust if necessary
    email: string;
}

const generateToken = (user: User): string => {
    return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET as string, { expiresIn: "90d" });
}

export default generateToken;
