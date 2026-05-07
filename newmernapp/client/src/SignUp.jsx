import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3001/register", { name, email, password })
      .then(() => navigate("/login"))
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setName(e.target.value)} placeholder="Name" />
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button>Register</button>
    </form>
  )
}

export default SignUp