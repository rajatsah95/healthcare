
Router and Middleware

app.use("/auth",authRouter)
app.use(authenticate)
app.use("/user",userRouter)
app.use("/appointment",appointmentRouter)
app.use(rbac)
app.use("/patient",patientRouter)
app.use("/doctor",doctorRouter)

appointment route

appointmentRouter.post("/",postAppointment)
appointmentRouter.get("/userAppointments",getAllAppointmentsOfUser)
appointmentRouter.get("/",rbac,getAppointment)
appointmentRouter.get("/:id",rbac,getOneAppointment)
appointmentRouter.put("/:id",rbac,updateAppointment)
appointmentRouter.delete("/:id",rbac,deleteAppointment)

Authentication Route

authRouter.post("/signup",postUser)
authRouter.post("/login",userLogin)

Doctor Route

doctorRouter.get("/",getDoctor)
doctorRouter.get("/:id",getOneDoctor)
doctorRouter.post("/",postDoctor)
doctorRouter.put("/:id",updateDoctor)
doctorRouter.delete("/:id",deleteDoctor)

Patient Route

patientRouter.get("/",getPatient)
patientRouter.get("/:id",getOnePatient)
patientRouter.post("/",postPatient)
patientRouter.put("/:id",updatePatient)
patientRouter.delete("/:id",deletePatient)

User Route

userRouter.get("/:id",getOneUser)
userRouter.get("/",rbac,getUser)
userRouter.put("/:id",rbac,updateUser)
userRouter.delete("/:id",rbac,deleteUser)








