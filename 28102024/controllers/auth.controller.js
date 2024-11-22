let bcrypt=require("bcryptjs")
let jwt=require("jsonwebtoken")
let secretKey="secretKey"
const { userModel } = require("../models/user.model")

let userLogin=async(req,res)=>
{
try{
let {email,password}=req.body
let user=await userModel.findOneBy({email})
if(!user)
{
    return res.status(400).json({message:"invalid credentials"})
}
let comparision=bcrypt.compare(password,user.password)
if(!comparision)
{
    return res.status(400).json({message:"invalid credentials"})
}
let token=jwt.sign({
    id:user.id,
    role:user.role
},secretKey,{expiresIn:"5h"})

return res.status(200).json({message:"you are successfully logged in",token})
}
catch(err)
{
    return res.status(500).json({message:err.message})
}
}


module.exports={userLogin,secretKey}