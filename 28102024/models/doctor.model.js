let {Schema,model}=require("mongoose")



let doctorSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true,
    },
    availability:
    {
        type:Boolean,
        default:true
    }
  

})

let doctorModel=model("doctor",doctorSchema)

module.exports={doctorModel}