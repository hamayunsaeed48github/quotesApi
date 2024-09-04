const Product = require("../model/product.model")

const getProducts = async (req,res) =>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
};

const getProductById = async (req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
};

const addProduct = async (req,res) =>{
    try {
        const product = await Product.insertMany(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProductById = async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            res.status(404).json("Prodcut not found")
        }

        res.status(200).json("Product delete successfully!")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProduct = async (req,res) =>{
    try {

        const product  = await Product.deleteMany({})

        if(product.deletedCount > 0){
            res.status(200).json({message:"All product are deleted"})
        } else{
            res.status(404).json({message:"No Product found"})
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports={
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    deleteProductById
}
