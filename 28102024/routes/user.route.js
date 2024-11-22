let {Router}=require("express")
const { getUser, getOneUser, postUser, updateUser, deleteUser } = require("../controllers/user.controller")
const { authenticate } = require("../middlewares/authenticate")
const { rbac } = require("../middlewares/rbac")



let userRouter=Router()


userRouter.get("/:id",getOneUser)
userRouter.get("/",rbac,getUser)
userRouter.put("/:id",rbac,updateUser)
userRouter.delete("/:id",rbac,deleteUser)

module.exports={userRouter}