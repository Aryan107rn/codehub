import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AuthPage() {
  const navigate = useNavigate()
  const { signIn, signUp } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mode, setMode] = useState<"login" | "signup">("login")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (mode === "login") {
      const { error } = await signIn(email, password)
      if (!error) navigate("/student")
      else alert(error.message)
    } else {
      const { error } = await signUp(email, password)
      if (!error) alert("Account created! Please login.")
      else alert(error.message)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md rounded-xl bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">CodeHUB</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded bg-gray-700 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded bg-gray-700 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-3 font-semibold hover:bg-blue-700"
          >
            {mode === "login" ? "Sign In" : "Sign Up"}
          </button>

        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}

          <button
            className="ml-2 text-blue-400"
            onClick={() =>
              setMode(mode === "login" ? "signup" : "login")
            }
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  )
}
