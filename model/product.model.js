const mongoose = require("mongoose")

const productSchema = mongoose.Schema(

    {
        quotes:{
            type:String,
            required:[true,"quotes is required"]
        },

        image:{
            type:String,
            require:false
        }
    },
    {
        timestamps : true,
    }

);

const Product = mongoose.model("Product",productSchema)

module.exports = Product;