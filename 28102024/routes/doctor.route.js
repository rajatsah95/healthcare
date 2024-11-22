let {Router}=require("express")
const { getDoctor, getOneDoctor, postDoctor, updateDoctor, deleteDoctor } = require("../controllers/doctor.controller")



let doctorRouter=Router()

doctorRouter.get("/",getDoctor)
doctorRouter.get("/:id",getOneDoctor)
doctorRouter.post("/",postDoctor)
doctorRouter.put("/:id",updateDoctor)
doctorRouter.delete("/:id",deleteDoctor)

module.exports={doctorRouter}