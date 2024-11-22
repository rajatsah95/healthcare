

const { AppDataSource } = require("../configs/typeorm");
const { userModel } = require("../models/user.model")
let bcrypt=require("bcryptjs")
const UserTable =  AppDataSource.getRepository(userModel);
let getUser=async(req,res)=>
{
   try{
         let Users=await UserTable.find()
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
             let User=await UserTable.findOneBy({id:UserId})
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
                     let salt=await bcrypt.genSalt(8)
                     let hashPassword= await bcrypt.hash(password,salt)

                 let newUser=UserTable.create({name,email,password:hashPassword,role:req.body.role?req.body.role:"user"})
                 await UserTable.save(newUser)
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
                     let uUser=await UserTable.findOneBy({id:UserId})
                     UserTable.merge(uUser,req.body)
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
                    let uUser=await UserTable.findOneBy({id:UserId})
                    
                    await UserTable.remove(uUser)
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
        