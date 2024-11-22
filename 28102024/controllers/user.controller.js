const { userModel } = require("../models/user.model")
let bcrypt=require("bcryptjs")
let getUser=async(req,res)=>
{
   try{
         let Users=await userModel.find()
         return res.status(200).json({Users})

   }
   catch(err)
   {
    return res.status(500).json({message:err.message})
   }
}
let getOneUser=async(req,res)=>
    {
       try{
             let UserId=req.params.id
             let User=await userModel.findOneBy({id:UserId})
             return res.status(200).json({User})
    
       }
       catch(err)
       {
        return res.status(500).json({message:err.message})
       }
    }
    let postUser=async(req,res)=>
        {
           try{
                    
                     let {name,email,password}=req.body
                     let salt=bcrypt.genSalt(8)
                     let hashPassword=bcrypt.hash(password,salt)

                 let newUser=userModel.create({name,email,password:hashPassword,role:req.body.role?req.body.role:"user"})
                 await userModel.save(newUser)
                 return res.status(200).json({message:"new User added successfully"})
        
           }
           catch(err)
           {
            return res.status(500).json({message:err.message})
           }
        }

        let updateUser=async(req,res)=>
            {
               try{
                     let UserId=req.params.id
                     let uUser=await userModel.findOneBy({id:UserId})
                     userModel.merge(uUser,req.body)
                     await userModel.save(uUser)
                     return res.status(200).json({message:"User updated successfully"})
            
               }
               catch(err)
               {
                return res.status(500).json({message:err.message})
               }
            }

            let deleteUser=async(req,res)=>
                {
                   try{
                    let UserId=req.params.id
                    let uUser=await userModel.findOneBy({id:UserId})
                    
                    await userModel.remove(uUser)
                    return res.status(200).json({message:"User deleted successfully"})
                
                   }
                   catch(err)
                   {
                    return res.status(500).json({message:err.message})
                   }
                }

                module.exports={
                    getUser,getOneUser,postUser,updateUser,deleteUser
                }
        