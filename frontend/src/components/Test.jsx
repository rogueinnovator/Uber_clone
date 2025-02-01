"use client"; // For Next.js App Router (optional)

import { useState, useStateAction } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const setFormDataAction = useStateAction(setFormData); // Optimized state setter
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormDataAction((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // Update input field dynamically
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-80">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2">
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
