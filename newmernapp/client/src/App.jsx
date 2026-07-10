import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import SignUp from "./SignUp"
import Login from "./Login"
import Home from "./Home"
import Comments from './Comments'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{    
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/comments" element={<Comments />} />
    </Routes> }

    {/* <h1>Hello</h1> */}
 

    </>
  )
}

export default App
