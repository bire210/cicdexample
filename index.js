const app=require("express")();


app.get("/",(req,res)=>{
    res.send("Home")
})
app.listen(8000,()=>{
    console.log("Server is running over 8000")
})