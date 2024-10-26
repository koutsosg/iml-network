"use client";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Make POST request to the /api/logout endpoint to clear the authToken cookie
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.success) {
      // If logout is successful, redirect to the login page or home page
      router.push("/admin");
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
};
export default LogoutButton;
