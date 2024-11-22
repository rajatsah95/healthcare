const { appointmentModel } = require("../models/appointment.model")
const { userModel } = require("../models/user.model")

let getAppointment=async(req,res)=>
{
   try{
         let Appointments=await appointmentModel.find()
         return res.status(200).json({Appointments})

   }
   catch(err)
   {
    return res.status(500).json({message:err.message})
   }
}
let getAllAppointmentsOfUser=async(req,res)=>
   {
      try{
            let userId=req.user.id
            let user=await userModel.findOneBy({id:userId})
            let appointments=await appointmentModel.find({patientName:user.name})
            return res.status(200).json({appointments})
   
      }
      catch(err)
      {
       return res.status(500).json({message:err.message})
      }
   }
let getOneAppointment=async(req,res)=>
    {
       try{
             let appointmentId=req.params.id
             let appointment=await appointmentModel.findOneBy({id:appointmentId})
             return res.status(200).json({appointment})
    
       }
       catch(err)
       {
        return res.status(500).json({message:err.message})
       }
    }
    let postAppointment=async(req,res)=>
        {
           try{
                 
                 let newAppointment=appointmentModel.create(req.body)
                 await appointmentModel.save(newAppointment)
                 return res.status(200).json({message:"new Appointment added successfully"})
        
           }
           catch(err)
           {
            return res.status(500).json({message:err.message})
           }
        }

        let updateAppointment=async(req,res)=>
            {
               try{
                     let AppointmentId=req.params.id
                     let udoctor=await appointmentModel.findOneBy({id:AppointmentId})
                     appointmentModel.merge(udoctor,req.body)
                     await appointmentModel.save(udoctor)
                     return res.status(200).json({message:"Appointment updated successfully"})
            
               }
               catch(err)
               {
                return res.status(500).json({message:err.message})
               }
            }

            let deleteAppointment=async(req,res)=>
                {
                   try{
                    let AppointmentId=req.params.id
                    let udoctor=await appointmentModel.findOneBy({id:AppointmentId})
                    
                    await appointmentModel.remove(udoctor)
                    return res.status(200).json({message:"Appointment deleted successfully"})
                
                   }
                   catch(err)
                   {
                    return res.status(500).json({message:err.message})
                   }
                }

                module.exports={
                    getAppointment,getOneAppointment,postAppointment,updateAppointment,deleteAppointment,getAllAppointmentsOfUser
                }
        