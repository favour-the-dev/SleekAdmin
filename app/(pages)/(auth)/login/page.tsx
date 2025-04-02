"use client";

import { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { SiSlickpic } from "react-icons/si";

import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log({ email, password }); // Handle login logic here
  };

  return (
    <>
      <section className="fixed top-0 left-0 w-screen h-screen bg-[#fafafa] text-[#2a2a2a] flex justify-between">
        <div className="w-full h-full md:max-w-1/2 flex items-center justify-center">
          <div className="w-full h-full md:h-fit max-w-md p-8 rounded-lg">
            <span className="w-fit mx-auto my-12 md:my-8 font-bold text-4xl flex items-center gap-1 font-[family-name:var(--font-algy)]">
              <SiSlickpic /> <span>Sleek</span>
            </span>
            <h2 className="text-2xl font-semibold text-center mb-6">LOG IN</h2>
            <p className="text-center text-gray-600 mb-6">
              Welcome back, sign in to your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a2a]"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Must be 8 characters long"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a2a2a]"
                />
              </div>

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-[#2a2a2a] text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2a2a2a] text-white p-3 rounded-md hover:opacity-90"
              >
                Log in
              </button>
              <div className="text-center text-gray-500">Or</div>
              <button className="w-full border border-gray-300 p-3 rounded-md flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100">
                <span>🔗</span> Log in with Magic Link
              </button>

              <p className="text-center text-gray-600 text-sm">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-[#2a2a2a] hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* image */}
        <div className="hidden md:block w-full h-full max-w-1/2 bg-[#2a2a2a] text-[#fafafa]"></div>
      </section>
    </>
  );
}
