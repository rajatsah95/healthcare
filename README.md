
<h3>Router and Middleware</h3>

<p>app.use("/auth",authRouter)</p>
<p>app.use(authenticate)</p>
<p>app.use("/user",userRouter)</p>
<p>app.use("/appointment",appointmentRouter)</p>
<p>app.use(rbac)</p>
<p>app.use("/patient",patientRouter)</p>
<p>app.use("/doctor",doctorRouter)</p>

<h3>appointment route</h3>

<p>appointmentRouter.post("/",postAppointment)</p>
<p>appointmentRouter.get("/userAppointments",getAllAppointmentsOfUser)</p>
<p>appointmentRouter.get("/",rbac,getAppointment)</p>
<p>appointmentRouter.get("/:id",rbac,getOneAppointment)</p>
<p>appointmentRouter.put("/:id",rbac,updateAppointment)</p>
<p>appointmentRouter.delete("/:id",rbac,deleteAppointment)</p>

<h3>Authentication Route</h3>

<p>authRouter.post("/signup",postUser)</p>
<p>authRouter.post("/login",userLogin)</p>

<h3>Doctor Route</h3>

<p>doctorRouter.get("/",getDoctor)</p>
<p>doctorRouter.get("/:id",getOneDoctor)</p>
<p>doctorRouter.post("/",postDoctor)</p>
<p>doctorRouter.put("/:id",updateDoctor)</p>
<p>doctorRouter.delete("/:id",deleteDoctor)</p>

<h3>Patient Route</h3>

<p>patientRouter.get("/",getPatient)</p>
<p>patientRouter.get("/:id",getOnePatient)</p>
<p>patientRouter.post("/",postPatient)</p>
<p>patientRouter.put("/:id",updatePatient)</p>
<p>patientRouter.delete("/:id",deletePatient)</p>

<h3>User Route</h3>

<p>userRouter.get("/:id",getOneUser)</p>
<p>userRouter.get("/",rbac,getUser)</p>
<p>userRouter.put("/:id",rbac,updateUser)</p>
<p>userRouter.delete("/:id",rbac,deleteUser)</p>








