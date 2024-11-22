let {EntitySchema}=require("typeorm")

let appointmentModel=new EntitySchema({
    name:"appointment",
    tableName:"appointments",
    columns:
    {
        id:{
            type:"int",
            primary:true,
            generated:true
        },
        patientName:{
            type:"varchar",
            length:24,
            nullable:false
        },
        doctorName:{
            type:"varchar",
            length:24,
            nullable:false,
        
        },
        appointmentTime:{
            type:"timestamp",
            nullable:false
        },
        reason:{
            type:"varchar",
            length:255,
            nullable:false,
        },
        status:
        {
            type:"enum",
            enum:["pending","approved","rejected"],
            default:"pending"
        },
       createdAt:
       {
        type:"timestamp",
        default:()=>"CURRENT_TIMESTAMP"
       }

    }
})

module.exports={appointmentModel}