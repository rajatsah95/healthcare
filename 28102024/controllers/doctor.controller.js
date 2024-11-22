const { doctorModel } = require("../models/doctor.model")

let getDoctor=async(req,res)=>
{
   try{
         let doctors=await doctorModel.find()
         return res.status(200).json({doctors})

   }
   catch(err)
   {
    return res.status(500).json({message:err.message})
   }
}
let getOneDoctor=async(req,res)=>
    {
       try{
             let doctorId=req.params.id
             let doctor=await doctorModel.findById(doctorId)
             return res.status(200).json({doctor})
    
       }
       catch(err)
       {
        return res.status(500).json({message:err.message})
       }
    }
    let postDoctor=async(req,res)=>
        {
           try{
                 
                 let newDoctor=new doctorModel(req.body)
                 await newDoctor.save()
                 return res.status(200).json({message:"new Doctor added successfully"})
        
           }
           catch(err)
           {
            return res.status(500).json({message:err.message})
           }
        }

        let updateDoctor=async(req,res)=>
            {
               try{
                     let doctorId=req.params.id
                     await doctorModel.findByIdAndUpdate(doctorId,req.body)
                     return res.status(200).json({message:"Doctor updated successfully"})
            
               }
               catch(err)
               {
                return res.status(500).json({message:err.message})
               }
            }

            let deleteDoctor=async(req,res)=>
                {
                   try{
                         let doctorId=req.params.id
                         await doctorModel.findByIdAndDelete(doctorId)
                         return res.status(200).json({message:"Doctor deleted successfully"})
                
                   }
                   catch(err)
                   {
                    return res.status(500).json({message:err.message})
                   }
                }

                module.exports={
                    getDoctor,getOneDoctor,postDoctor,updateDoctor,deleteDoctor
                }
        