// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//   res.json({message:"api is working hello"})
// })
// app.listen(8000,()=>{
//   console.log("server is running");
// })

import jwt from "jsonwebtoken"

function auth(req,res,next){
  const token= req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: "Token Missing"
    });
  } 

  try{
   const verify = jwt.verify(token, "secret");
   req.user = verify;
   next()
  }catch{
  res.status(401).json({
        message: "Invalid Token"
      });
    }
}