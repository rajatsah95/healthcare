let {EntitySchema}=require("typeorm")

let userModel=new EntitySchema({
    name:"user",
    tableName:"users",
    columns:
    {
        id:{
            type:"int",
            primary:true,
            generated:true
        },
        name:{
            type:"varchar",
            length:24,
            nullable:false
        },
        email:{
            type:"varchar",
            length:24,
            nullable:false,
            unique:true
        },
        password:{
            type:"varchar",
            length:24,
            nullable:false,
        },
        role:
        {
            type:"enum",
            enum:["user","admin"],
            default:"user"
        }

    }
})

module.exports={userModel}