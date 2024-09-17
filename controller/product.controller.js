const Product = require("../model/product.model")
const Upload = require("../helper/upload")

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
        // const product = await Product.insertMany(req.body)
        // res.status(200).json(product)

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded!' });
        }
    
        const upload = await Upload.uploadFile(req.file.path); // Cloudinary upload
    
        const { quotes } = req.body;
        var product = new Product({
            quotes,
            image: upload.secure_url, // Get image URL from Cloudinary upload
        });
    
        var record = await product.save();
        res.send({ success: true, msg: 'File uploaded successfully', url: record });
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
};

const UpdateProductById = async (req,res) =>{
    try {
 
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
    
        if(!product){
            return res.status(404).json({message:"product not found"})
        }
    
        const UpdateProduct = await Product.findById(id)
        res.status(200).json(UpdateProduct)
        
       } catch (error) {
        res.status(500).json({message:error.message})
       }


};



module.exports={
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    deleteProductById,
    UpdateProductById
}
