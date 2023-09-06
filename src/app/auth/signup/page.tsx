"use client"

import Image from "next/image"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../app/firebase-config/configaration.tsx"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [name, setName] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        if (user) {
          redirect("/dashboard")
        }
      })
      .catch((error) => {
        const errorMessage = error.message
        if (errorMessage.includes("email-already-in-use")) {
          setError("Email already in use")
        } else if (errorMessage.includes("invalid-email")) {
          setError("Invalid email")
        }
        if (errorMessage) {
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        }
      })
  }

  return (
    <div className=" flex justify-center mt-[100px] mb-[100px]">
      <ToastContainer />
      <div className=" w-[420px] border-2 border-gray-100 rounded-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-500">Signup</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Name</label>
          <br />
          <input
            className=" border-2 border-gray-100 rounded-sm p-2"
            placeholder="example@mail.com"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br /> */}
          <label htmlFor="email">Email</label>

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
          <br />
          <label htmlFor="password">Password</label>
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
            {" "}
            login
          </Link>
        </p>
      </div>
    </div>
  )
}
