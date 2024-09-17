const express = require("express")
const mongoose = require("mongoose")
const ProductRoutes = require("./routes/product.routes")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api",ProductRoutes)


app.get("/" , (req,res)=>{
    res.send("Hello from api.")
})


mongoose.connect("mongodb+srv://hamayunsaeed48:QI1EfVxdlgQy7Z1M@cluster0.n788t.mongodb.net/Clustor0?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("your app connect with database")
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    })

})
.catch(()=>{
    console.log("your app can't connect with database")
})
