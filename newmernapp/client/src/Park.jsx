import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password })
      .then(res => {
        if (res.data === "Success") {
          navigate("/home")
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button>Login</button>
    </form>
  )
}

export default Login