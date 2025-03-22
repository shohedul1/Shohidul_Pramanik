import { create } from 'zustand';
import { toast } from 'react-toastify';
import { LoginData, SignupData } from '@/lib/data';

export const userAuthStore = create<{
    authUser: any;
    loginLoader: boolean;
    signupLoader: boolean;
    checkAuthLoader: Boolean;
    login: ({ loginData }: { loginData: LoginData }) => Promise<void>;
    signup: ({ signupData }: { signupData: SignupData }) => Promise<void>;
    checkAuth: () => Promise<void>;
}>((set) => ({
    authUser: null,
    loginLoader: false,
    signupLoader: false,
    checkAuthLoader: false,


    login: async ({ loginData }) => {
        try {
            set({ loginLoader: true });

            const response = await fetch(`/api/author/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...loginData }),
                credentials: 'include',
            });

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem("token", result.token);
                set({ authUser: result.user });
                toast.success(result.message);
                // Wait 2 seconds before redirecting
                setTimeout(() => {
                    window.location.href = '/profile';
                }, 2000);
            } else {
                toast.error(result.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            set({ loginLoader: false });
        }
    },
    signup: async ({ signupData }) => {
        try {
            set({ signupLoader: true });

            const response = await fetch(`/api/author/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...signupData }),
                credentials: 'include',
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message);
                // Wait 2 seconds before redirecting
                setTimeout(() => {
                    window.location.href = '/author/login';
                }, 2000);
            } else {
                toast.error(result.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            set({ signupLoader: false });
        }
    },

    checkAuth: async () => {
        set({ checkAuthLoader: true });

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                set({ authUser: null });
                return;
            }

            const response = await fetch('/api/author', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Send token in headers
                },
                credentials: 'include',
            });

            const result = await response.json();
            if (response.ok) {
                set({ authUser: result.user });
            } else {
                set({ authUser: null });
                localStorage.removeItem("token"); // Remove invalid token
            }
        } catch (error) {
            console.error("Error checking auth:", error);
            set({ authUser: null });
            localStorage.removeItem("token");
        } finally {
            set({ checkAuthLoader: false });
        }
    }



}));