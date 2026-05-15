"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Registration failed.");
      setLoading(false);
      return;
    }

    setMessage("Registration successful.");

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Register</h1>

        {message && (
          <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {message}
          </p>
        )}

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="mb-4 w-full rounded border px-3 py-2 text-gray-900"
          placeholder="Enter name"
        />

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="mb-4 w-full rounded border px-3 py-2 text-gray-900"
          placeholder="Enter email"
        />

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          className="mb-4 w-full rounded border px-3 py-2 text-gray-900"
          placeholder="Enter password"
        />

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({
              ...form,
              confirmPassword: e.target.value,
            })
          }
          className="mb-6 w-full rounded border px-3 py-2 text-gray-900"
          placeholder="Confirm password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black px-4 py-2 font-medium text-white disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </main>
  );
}
