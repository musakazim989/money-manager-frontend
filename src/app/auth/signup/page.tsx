"use client"

import Image from "next/image"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function Signup() {
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        requestOptions
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" flex justify-center mt-[100px] mb-[100px]">
      <ToastContainer />
      <div className=" w-[420px] border-2 border-gray-100 rounded-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-500">Signup</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className=" text-gray-500 text-sm" htmlFor="fname">
            First Name
          </label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="First Name"
            type="text"
            id="fname"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <label className=" text-gray-500 text-sm" htmlFor="lname">
            Password
          </label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="Last Name"
            type="text"
            id="lname"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <label className=" text-gray-500 text-sm" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="example@mail.com"
            type="email"
            id="email"
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            type="submit"
          >
            Signup
          </button>
        </form>
        <div className=" mt-6 flex gap-4">
          <Image
            className=" cursor-pointer"
            src="/google.svg"
            alt="google"
            width={35}
            height={35}
          />
          <Image
            className=" cursor-pointer"
            src="/facebook-v1.svg"
            alt="google"
            width={30}
            height={30}
          />
        </div>
        <p className="mt-4">Signup with google or facebook.</p>
        <p className="mt-4">
          Already have an account?
          <Link className="text-orange-500" href="/auth/login">
            login
          </Link>
        </p>
      </div>
    </div>
  )
}
