"use client";
import { userAuthStore } from "@/app/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
  const { authUser, checkAuth, checkAuthLoader } = userAuthStore();
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Run authentication check only once when the component mounts
  useEffect(() => {
    checkAuth().finally(() => setIsAuthChecked(true)); // Ensure we wait for auth check
  }, []);

  // Redirect **only if** authentication check is completed & user is not authenticated
  useEffect(() => {
    if (isAuthChecked && !authUser && !checkAuthLoader) {
      router.replace("/");
    }
  }, [isAuthChecked, authUser, checkAuthLoader]);

  // Show a loading state while authentication is being checked
  if (!isAuthChecked || checkAuthLoader) return <p>Loading...</p>;

  return (
    <div>
      {!isAuthChecked || checkAuthLoader || authUser && (
        <div>
          <h1>Welcome, {authUser.name}</h1>
          <p>Email: {authUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
