const express = require("express");
const router = express.Router();
const multer = require("multer")


var uploader = multer({
    storage:multer.diskStorage({}),
    limits:{fileSize : 500000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error('Invalid file type, only images are allowed!'), false); // Reject the file
        }
    },
})

const {getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    deleteProductById,
    UpdateProductById

}= require("../controller/product.controller");

router.get("/quotes",getProducts);
router.get("/:id",getProductById);
router.post("/add/quotes",uploader.single('image'),addProduct);
router.delete("/delete/all/quotes",deleteProduct);
router.delete("/delete/:id",deleteProductById);
router.put("/update/:id",UpdateProductById);

module.exports = router;
