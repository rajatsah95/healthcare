let {Router}=require("express")
const { getPatient, getOnePatient, postPatient, updatePatient, deletePatient } = require("../controllers/patient.controller")


let patientRouter=Router()

patientRouter.get("/",getPatient)
patientRouter.get("/:id",getOnePatient)
patientRouter.post("/",postPatient)
patientRouter.put("/:id",updatePatient)
patientRouter.delete("/:id",deletePatient)

module.exports={patientRouter}