
<h3>Router and Middleware</h3>

app.use("/auth",authRouter)
app.use(authenticate)
app.use("/user",userRouter)
app.use("/appointment",appointmentRouter)
app.use(rbac)
app.use("/patient",patientRouter)
app.use("/doctor",doctorRouter)

<h3>appointment route</h3>

appointmentRouter.post("/",postAppointment)
appointmentRouter.get("/userAppointments",getAllAppointmentsOfUser)
appointmentRouter.get("/",rbac,getAppointment)
appointmentRouter.get("/:id",rbac,getOneAppointment)
appointmentRouter.put("/:id",rbac,updateAppointment)
appointmentRouter.delete("/:id",rbac,deleteAppointment)

<h3>Authentication Route</h3>

authRouter.post("/signup",postUser)
authRouter.post("/login",userLogin)

<h3>Doctor Route</h3>

doctorRouter.get("/",getDoctor)
doctorRouter.get("/:id",getOneDoctor)
doctorRouter.post("/",postDoctor)
doctorRouter.put("/:id",updateDoctor)
doctorRouter.delete("/:id",deleteDoctor)

<h3>Patient Route</h3>

patientRouter.get("/",getPatient)
patientRouter.get("/:id",getOnePatient)
patientRouter.post("/",postPatient)
patientRouter.put("/:id",updatePatient)
patientRouter.delete("/:id",deletePatient)

<h3>User Route</h3>

userRouter.get("/:id",getOneUser)
userRouter.get("/",rbac,getUser)
userRouter.put("/:id",rbac,updateUser)
userRouter.delete("/:id",rbac,deleteUser)








