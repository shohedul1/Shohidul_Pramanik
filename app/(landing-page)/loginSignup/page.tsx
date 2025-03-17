'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import Notification from "../components/Notification/Notification";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import MainButton from "../components/MainButton/MainButton";

const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["student", "client", "admin"], {
        errorMap: () => ({ message: "Please select a role" }),
    }),
});

const signupSchema = loginSchema.extend({
    name: z.string().min(3, "Name must be at least 3 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

async function handleFormSubmit(data: any, endpoint: string) {
    try {

        const response = await fetch('/api/author', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, endpoint }),
        });

        const result = await response.json();

        if (response.ok) {
            toast.success(`${endpoint === "signup" ? "Sign Up" : "Login"} successful!`);
        } else {
            toast.error(result.error || "An error occurred. Please try again.");
        }
    } catch (error) {
        toast.error("An error occurred. Please try again.");
    }
}

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className="flex items-center justify-center ">
                <Card className="w-full max-w-sm shadow-lg border border-gray-200 dark:bg-gray-300 bg-white rounded-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-lg font-semibold">
                            {isLogin ? "Login" : "Sign Up"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLogin ? <LoginForm /> : <SignupForm />}
                        <Button
                            variant="link"
                            className="w-full mt-4 text-blue-600 hover:underline"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <Notification />
        </>
    );
}

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: any) => handleFormSubmit(data, "login");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Email" {...register("email")} className="placeholder:text-black dark:placeholder:text-white " />
            {errors.email?.message && <p className="text-red-500 text-xs">{String(errors.email.message)}</p>}

            <div className="relative">
                <Input type={showPassword ? "text" : "password"} className="placeholder:text-black dark:placeholder:text-white " placeholder="Password" {...register("password")} />
                <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
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
                className="w-full  relative"

            >
                <MainButton text="Login" type="submit" className="w-full" />
            </motion.div>
        </form>
    );
}

function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data: any) => handleFormSubmit(data, "signup");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Name" {...register("name")} className="placeholder:text-black dark:placeholder:text-white " />
            {errors.name?.message && <p className="text-red-500 text-xs">{String(errors.name.message)}</p>}

            <Input placeholder="Email" {...register("email")} className="placeholder:text-black dark:placeholder:text-white " />
            {errors.email?.message && <p className="text-red-500 text-xs">{String(errors.email.message)}</p>}

            <div className="relative">
                <Input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password")} className="placeholder:text-black dark:placeholder:text-white " />
                <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>
            {errors.password?.message && <p className="text-red-500 text-xs">{String(errors.password.message)}</p>}

            <div className="relative">
                <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" {...register("confirmPassword")} className="placeholder:text-black dark:placeholder:text-white " />
                <button type="button" className="absolute right-3 top-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>
            {errors.confirmPassword?.message && <p className="text-red-500 text-xs">{String(errors.confirmPassword.message)}</p>}

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
                className="w-full  relative"

            >
                <MainButton text="Sign Up" type="submit" className="w-full" />
            </motion.div>

        </form>
    );
}
