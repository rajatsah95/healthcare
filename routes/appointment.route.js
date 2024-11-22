let {Router}=require("express")
const { getAppointment, getOneAppointment, updateAppointment, deleteAppointment, postAppointment, getAllAppointmentsOfUser } = require("../controllers/appointment.controller")
const { rbac } = require("../middlewares/rbac")





let appointmentRouter=Router()
appointmentRouter.post("/",postAppointment)
appointmentRouter.get("/userAppointments",getAllAppointmentsOfUser)
appointmentRouter.get("/",rbac,getAppointment)
appointmentRouter.get("/:id",rbac,getOneAppointment)

appointmentRouter.put("/:id",rbac,updateAppointment)
appointmentRouter.delete("/:id",rbac,deleteAppointment)

module.exports={appointmentRouter}