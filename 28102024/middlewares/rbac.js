let rbac=(req,res,next)=>
{
    if(req.user.role==="admin")
    {
        return next()
    }
    return res.status(400).json({message:"you are not authorized"})
    
}

module.exports={rbac}