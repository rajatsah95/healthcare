let {Router}=require("express")
const {  postUser } = require("../controllers/user.controller")
const { userLogin } = require("../controllers/auth.controller")



let authRouter=Router()



authRouter.post("/signup",postUser)
authRouter.post("/login",userLogin)

module.exports={authRouter}