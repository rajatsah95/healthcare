const { patientModel } = require("../models/patient.model")

let getPatient=async(req,res)=>
{
   try{
         let patients=await patientModel.find()
         return res.status(200).json({patients})

   }
   catch(err)
   {
    return res.status(500).json({message:err.message})
   }
}
let getOnePatient=async(req,res)=>
    {
       try{
             let patientId=req.params.id
             let patient=await patientModel.findById(patientId)
             return res.status(200).json({patient})
    
       }
       catch(err)
       {
        return res.status(500).json({message:err.message})
       }
    }
    let postPatient=async(req,res)=>
        {
           try{
                 
                 let newPatient=new patientModel(req.body)
                 await newPatient.save()
                 return res.status(200).json({message:"new Patient added successfully"})
        
           }
           catch(err)
           {
            return res.status(500).json({message:err.message})
           }
        }

        let updatePatient=async(req,res)=>
            {
               try{
                     let patientId=req.params.id
                     await patientModel.findByIdAndUpdate(patientId,req.body)
                     return res.status(200).json({message:"Patient updated successfully"})
            
               }
               catch(err)
               {
                return res.status(500).json({message:err.message})
               }
            }

            let deletePatient=async(req,res)=>
                {
                   try{
                         let patientId=req.params.id
                         await patientModel.findByIdAndDelete(patientId)
                         return res.status(200).json({message:"Patient deleted successfully"})
                
                   }
                   catch(err)
                   {
                    return res.status(500).json({message:err.message})
                   }
                }

                module.exports={
                    getPatient,getOnePatient,postPatient,updatePatient,deletePatient
                }
        