import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(
      `${import.meta.env.VITE_API_URL}/register`,
      { name, email, password }
    )
    .then(() => navigate("/login"))
    .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div
          className='bg-white p-4 rounded shadow'
          style={{ width: "350px" }}
        >
          <h1 className='text-center mb-4'>REGISTER</h1>

          <div className='mb-3'>
            <input
              type="text"
              className='form-control'
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
          </div>

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

          <button className='btn btn-success w-100'>
            Register
          </button>

          <div>
          <button className='btn btn-success w-100'>Login</button>
          </div>

        </div>

      </div>
    </form>
  )
}

export default SignUp