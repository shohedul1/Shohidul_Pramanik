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
            localStorage.setItem("token", result.token);

            if (response.ok) {
                toast.success(result.message);
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
                set({ authUser: result.user });
                toast.success(result.message);
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
            const response = await fetch('/api/author', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            const result = await response.json();
            if (response.ok) {
                set({ authUser: result.user });
            } else {
                set({ authUser: null });
            }
        } catch (error) {
            set({ authUser: null });
        } finally {
            set({ checkAuthLoader: false });
        }
    },

}));