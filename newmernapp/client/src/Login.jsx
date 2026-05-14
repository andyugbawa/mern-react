import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        { email, password }
      )

      if (res.data === "Success") {
        navigate("/home")
      } else {
        setError("Invalid email or password")
      }

    } catch (err) {
      console.log(err)
      setError("Login failed")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">

        <div
          className="bg-white p-4 rounded shadow"
          style={{ width: "350px" }}
        >
          <h1 className="text-center mb-4">
            LOGIN
          </h1>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </div>

      </div>
    </form>
  )
}

export default Login