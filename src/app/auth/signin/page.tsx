"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const test = (a: string, b: string) => {
    console.log("a");
    debugger;
  };

  const handleLogOut = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
        {
          credentials: "include",
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        reqOptions,
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center mt-[10%]">
      <div className=" w-[420px] border-2 border-gray-100 rounded-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-500">Login</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className=" text-gray-500 text-sm" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="example@mail.com"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className=" text-gray-500 text-sm" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
        <button
          className="bg-red-500 text-white px-4 py-1.5 text-lg rounded-lg"
          onClick={handleLogOut}
        >
          Logout
        </button>
        <div className=" mt-6 flex gap-4">
          <Image src="/google.svg" alt="google" width={35} height={35} />
          <Image src="/facebook-v1.svg" alt="google" width={30} height={30} />
        </div>
        <p className="mt-4">login with google or facebook.</p>
      </div>
    </div>
  );
}
