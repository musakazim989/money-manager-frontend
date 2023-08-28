"use client"

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className=" flex  justify-center mt-[10%]">
      <div className=" w-1/4 border-2 border-gray-100 rounded-lg p-4">
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
