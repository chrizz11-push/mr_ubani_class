const express=require("express")
const mongoose  = require("mongoose")
const router=require("./gameRouter/gameRouter")
const port = process.env.PORT || 400;

const app=express()
app.use(express.json())

const Online = "mongodb+srv://christopher:christopher123@cluster0.tkgff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(Online,
{    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
})


mongoose.connection.once("open", ()=>{
console.log("We are  connected to a db")
    }
).on("error", ()=>{
    console.log("Unable to connect to mongo")
})

// app.get("/",(req,res)=>{
//     res.send("New way of creating server")
// })

app.use("/api/gamer/uploads", express.static("./uploads"));
app.use("/api", router)

app.listen(port,()=>{
  console.log(`server is runnog at port:${port}`)  
})