require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const UserModel = require("./models/User")

const app = express()


app.use(express.json())


app.use(cors({
  origin: [
    "https://mern-react-beige.vercel.app", // your Vercel frontend
    "http://localhost:5173"                // keep for local testing
  ],
  credentials: true
}));


//  app.use(cors({
//   origin: process.env.FRONTEND_URL,
//   credentials: true
// }))


// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }))
app.use(cookieParser())

// mongoose.connect("mongodb://localhost:27017/employee")
// mongoose.connect(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err))



  app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});




app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hash = await bcrypt.hash(password, 10)

    const user = await UserModel.create({ name, email, password: hash })
    res.json({ status: "OK", user })
  } catch (err) {
    res.json(err)
  }
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json("Missing fields")
    }

    const user = await UserModel.findOne({ email })

    if (!user) {
      return res.status(404).json("User not found")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(401).json("Wrong password")
    }

    res.json("Success")

  } catch (err) {
    console.log("LOGIN ERROR:", err)
    res.status(500).json("Server error")
  }
})




const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})


// app.listen(3001, () => {
//   console.log("Server running on port 3001")
// })