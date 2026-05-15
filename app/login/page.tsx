"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      const nextPath = new URLSearchParams(window.location.search).get("next");
      router.push(
        nextPath?.startsWith("/") && !nextPath.startsWith("//")
          ? nextPath
          : "/",
      );
    } catch (error) {
      console.error("LOGIN PAGE ERROR:", error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow"
      >
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Login</h1>

        {message && (
          <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {message}
          </p>
        )}

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="text"
          value={form.username}
          onChange={(event) =>
            setForm({
              ...form,
              username: event.target.value,
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
          onChange={(event) =>
            setForm({
              ...form,
              password: event.target.value,
            })
          }
          className="mb-6 w-full rounded border px-3 py-2 text-gray-900"
          placeholder="Enter password"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-black px-4 py-2 font-medium text-white disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-black hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}
