const express =require("express")
const app = express()
const port =5000

app.get("/",(req,res)=>{

    res.send("Hello world I am win")
})


app.listen(port,()=>{

    console.log("The port is running "+port)
})