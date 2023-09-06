"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation.js"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className=" flex justify-center mt-[10%]">
      <div className=" w-[420px] border-2 border-gray-100 rounded-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-500">Login</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="example@mail.com"
            type="email"
            id="email"
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="Password"
            type="password"
            id="password"
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
        <div className=" mt-6 flex gap-4">
          <Image src="/google.svg" alt="google" width={35} height={35} />
          <Image src="/facebook-v1.svg" alt="google" width={30} height={30} />
        </div>
        <p className="mt-4">login with google or facebook.</p>
      </div>
    </div>
  )
}
