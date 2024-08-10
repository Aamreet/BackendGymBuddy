require("dotenv").config();
const express = require("express");

const app = express();


app.get("/",(req, res)=>{
  setTimeout(()=>{
    res.json({reqUrl: req.originalUrl, usernName: "Amreet Gandi"});
  },4000);
   
});

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server is listening ... ");
});