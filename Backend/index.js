const express = require("express");
const {connection} = require("./database");
const {userroutes }= require("./Routes/userRoutes");
require("dotenv").config();
const cors=require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
   res.json("Hello WORLD")
})

app.use("/user", userroutes);



const PORT = process.env.port || 8080; 

app.listen(PORT, async () => {
  try {
    await connection
    console.log("Connected to the database");
    console.log(`Server is listening on port ${PORT}`);
  } catch (err) {
    console.error(err);
    console.log("Something went wrong while starting the servers");
  }
}
)