let mongoose=require("mongoose")
let connection=mongoose.connect("mongodb://localhost:27017/imdb")

module.exports={connection}