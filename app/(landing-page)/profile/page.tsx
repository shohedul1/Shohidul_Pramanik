"use client";
import { userAuthStore } from "@/app/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

const Profile = () => {
  const { authUser, checkAuth, checkAuthLoader, updateUser } = userAuthStore();
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    checkAuth().finally(() => setIsAuthChecked(true));
  }, []);

  useEffect(() => {
    if (isAuthChecked && !authUser && !checkAuthLoader) {
      router.replace("/");
    }
  }, [isAuthChecked, authUser, checkAuthLoader]);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      handleImageUpload(file); // Call the upload function after selecting the image
    }
  };

  // Handle image upload with Fetch
  const handleImageUpload = async (file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      setIsUploading(true);
      const response = await fetch("/api/author/uploadImage", {
        method: "POST",
        body: formData,
        headers: {
          "user-id": authUser?._id || "", // Send user ID in the headers
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      const { avatarUrl, user } = data;

      if (user) {
        // Update the user's avatar URL in the store or state
        updateUser(user);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAuthChecked || checkAuthLoader) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <img
              src={authUser?.avatar || "/default-avatar.png"}
              alt="Profile Picture"
              width={96}
              height={96}
              className="rounded-full border-2 border-blue-500"
            />
            {/* Hidden file input */}
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="absolute bottom-1 right-1 opacity-0"
              id="file-input"
            />
            <button
              onClick={() => document.getElementById("file-input")?.click()}
              disabled={isUploading}
              className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full shadow"
            >
              <Pencil size={16} />
            </button>
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            {authUser?.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{authUser?.email}</p>
        </div>

        {/* User Info Section */}
        <div className="mt-6">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Username:</strong> {authUser?.username || "N/A"}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Role:</strong> {authUser?.role || "User"}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Joined:</strong> {new Date(authUser?.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-1">
            LogOut
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
