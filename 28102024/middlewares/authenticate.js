const { secretKey } = require("../controllers/auth.controller")

let authenticate=async(req,res,next)=>
{
    try
   {
     let token=req.headers.authorization&&req.headers.authorization.split(" ")[1]
    if(!token)
    {
        return res.status(400).json({message:"please login"})
    }
    let decode=jwt.verify(token,secretKey)
    let user=await userModel.findOneBy({id:decode.id})
    if(!user)
    {
        return res.status(400).json({message:"please login"})
    }
    req.user=decode
    return next()
}
catch(err)
{
    return res.status(500).json({message:err.message})
}
}


module.exports={authenticate}