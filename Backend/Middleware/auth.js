const { blacklist } = require("../Blacklisting");



require("dotenv").config()

 const auth = (req, res, next) => {
  const token=req.headers.authorization?.split(" ")[1]
  if(blacklist.includes(token)){
      next()
  }
    
  };
 
  module.exports={
   auth
  }