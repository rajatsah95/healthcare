let {Schema,model}=require("mongoose")



let patientSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
  

})

let patientModel=model("patient",patientSchema)

module.exports={patientModel}