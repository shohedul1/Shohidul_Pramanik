'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      console.log("No token found, redirecting to login...");
      router.push('/author/login'); // Redirect if no token
      return;
    }

    setToken(storedToken);
    console.log("Token:", storedToken);
  }, [router]);

  return token ? (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile!</p>
    </div>
  ) : null; // Prevent rendering if redirecting
};

export default Profile;
