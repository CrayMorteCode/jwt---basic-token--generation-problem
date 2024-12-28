require("dotenv").config();
const express = require("express");
const jwt = require('jsonwebtoken')
const secret_key= '57d74d7cc886766a3c68059c64477255f79425e9b57006dfadbaf2292387c8bbedf928c8d3bd22c47754094fae8fd68afc87c02acf25b4f82a1d8d72ef685223'
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

const user = {
  username:"testuser",
  password:"password123"
};
//Route to generate
app.post('/login',(req,res)=>{
const{username,password}=req.body
  //Validate username and email
  if(username==user.username && password==user.password){
//generate token 
const token = jwt.sign({username},secret_key,{expiresIn:"1h"})
return res.status(200).json({"Login successful":token})
  }else{
    return res.status(404).json("Invalid credentials")
  }
})