const express = require("express")
const mongoose = require("mongoose")
const ProductRoutes = require("./routes/product.routes")
const dotenv = require('dotenv').config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api",ProductRoutes)


app.get("/" , (req,res)=>{
    res.send("Hello from api.")
})


mongoose.connect(`mongodb+srv://hamayunsaeed48:${process.env.Databasekey}@cluster0.n788t.mongodb.net/Clustor0?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log("your app connect with database")
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port 3000")
    })

})
.catch(()=>{
    console.log("your app can't connect with database")
})
