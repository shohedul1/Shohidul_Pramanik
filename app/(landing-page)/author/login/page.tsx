'use client';

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Notification from "../../components/Notification/Notification";
import MainButton from "../../components/MainButton/MainButton";
import { LoginData } from "@/lib/data";
import { userAuthStore } from "@/app/store/useAuthStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the validation schema
const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["student", "client", "admin"], {
        errorMap: () => ({ message: "Please select a role" }),
    }),
});

export default function AuthPage() {
    return (
        <>
            <div className="flex items-center justify-center">
                <Card className="w-full p-10 max-w-sm shadow-lg border border-gray-200 dark:bg-gray-300 bg-white rounded-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-lg font-semibold">Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
            <Notification />
        </>
    );
}

function LoginForm() {
    // Use react-hook-form with the zod resolver
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        try {
            const { login } = userAuthStore.getState();
            await login({ loginData: data });
        
                // Navigate to the profile page after successful login
                setTimeout(() => {
                    router.push('/profile');
                }, 1000); // Optional delay for a smoother transition
        } catch (error) {
            toast.error("An error occurred while submitting the form. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input placeholder="Email" {...register("email")} className="placeholder:text-black dark:placeholder:text-white" />
                {errors.email?.message && <p className="text-red-500 text-xs">{String(errors.email.message)}</p>}

                <div className="relative">
                    <Input type={showPassword ? "text" : "password"} className="placeholder:text-black dark:placeholder:text-white" placeholder="Password" {...register("password")} />
                    <button type="button" className="absolute right-3 top-2" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
                {errors.password?.message && <p className="text-red-500 text-xs">{String(errors.password.message)}</p>}

                <div className="relative">
                    <select {...register("role")} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="client">Client</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-xs">{String(errors.role.message)}</p>}
                </div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                    className="w-full relative"
                >
                    <MainButton text="Login" type="submit" className="w-full" />
                </motion.div>
                <div className="flex items-center justify-center text-blue-500 font-semibold hover:underline">
                    Need an account?
                    <Link href={"/author/signup"}>
                        Signup
                    </Link>

                </div>
            </form>
            <Notification />
        </>
    );
}
