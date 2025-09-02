import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const GoogleButton = ({ children }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-rubik font-semibold text-sm shadow-md hover:bg-gray-100 transition"
    >
      {children}
    </button>
  );
};

export default GoogleButton;
