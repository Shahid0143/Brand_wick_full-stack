const express=require("express")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { UserModel } = require("../Model/userModel");

const { auth } = require("../Middleware/auth");
const { blacklist } = require("../Blacklisting");
require("dotenv").config()


const userroutes=express.Router()



// Sign-up route
userroutes.post("/register", async (req, res) => {
  const { username, email, password, phone, name } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" })
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" })
      }

      const newUser = new UserModel({
        username,
        email,
        password: hash,
        phone,
        name
      })

      try {
        await newUser.save();
        return res.status(201).json({
          message: `${username} registration is successful`,
          registerData: { username, email, phone, name }
        });
      } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Login route
userroutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user._id },process.env.secret_key, {
        expiresIn: "1h"
      });
      return res.status(200).json({ token });
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

userroutes.get("/logout",async(req,res)=>{
  const token = await req.headers.authorization?.split(" ")[1]
try {
if(token)
blacklist.push(token)
   res.status(200).json({msg:"the user has been logged out"})
} catch (error) {
    res.status(400).json({err:error.message})
} 
}
)

module.exports = {
  userroutes
};
