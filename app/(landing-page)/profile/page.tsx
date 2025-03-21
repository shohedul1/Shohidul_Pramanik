'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!storedToken) {
      console.log("No token found, redirecting to login...");
      router.push('/author/login'); // Redirect if no token
    } else {
      setToken(storedToken);
    }
    
    setLoading(false);
  }, [router]);

  if (loading) return <p>Loading...</p>; // Prevent rendering issues

  return token ? (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile!</p>
    </div>
  ) : null;
};

export default Profile;
