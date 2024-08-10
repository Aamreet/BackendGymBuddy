require("dotenv").config();
const db= require("./db");
const express = require("express");

const app = express();



app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server is listening ... ");
});