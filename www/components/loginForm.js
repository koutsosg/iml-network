"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@components/core-ui/Button/Button";
import { InputField } from "@components/core-ui/Input";

export default function LogInForm() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = e.target.username.value;
    const password = e.target.password.value;
    // Make POST request to the /api/login endpoint
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // If login is successful, redirect to the homepage
      router.push("/dashboard");
    } else {
      // Display error message
      setError(data.message || "Login failed");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField type="text" name="username" label="USERNAME" required />
      <InputField type="password" name="password" label="PASSWORD" required />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button
        extraClasses="w-full"
        variant="primary"
        size="medium"
        isLoading={isLoading}
        spinner={true}
      >
        login
      </Button>
    </form>
  );
}
