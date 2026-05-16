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
            
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div
          className='bg-white p-4 rounded shadow'
          style={{ width: "350px" }}
        >
          <h1 className='text-center mb-4'>LOGIN</h1>

          <div className='mb-3'>
            <input
              type="email"
              className='form-control'
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <input
              type="password"
              className='form-control'
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
      <button>Login</button>


        </div>

      </div>

    </form>
  )
}

export default Login