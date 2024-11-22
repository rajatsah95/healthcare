let express=require("express")
const { connection } = require("./configs/mongodb")
const { AppDataSource } = require("./configs/typeorm")
const { authRouter } = require("./routes/auth.route")
const { authenticate } = require("./middlewares/authenticate")
const { userRouter } = require("./routes/user.route")
const { rbac } = require("./middlewares/rbac")
const { patientRouter } = require("./routes/patient.route")
const { doctorRouter } = require("./routes/doctor.route")
const { appointmentRouter } = require("./routes/appointment.route")
let PORT=4000
let app=express()
app.use(express.json())
app.get("/",(req,res)=>
{
    return res.json("welcome to healthCare appointment booking system")
})
app.use("/auth",authRouter)
app.use(authenticate)
app.use("/user",userRouter)
app.use("/appointment",appointmentRouter)
app.use(rbac)
app.use("/patient",patientRouter)
app.use("/doctor",doctorRouter)


app.listen(PORT,async()=>
{

    
    try
    {
        await connection
       await AppDataSource.initialize()
       console.log("DBs are connected")
        console.log(`server is running on http://localhost:${PORT}`)
    }
    catch(err)
    {
        console.log({message:err.message})
    }
})