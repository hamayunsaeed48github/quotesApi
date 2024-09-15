const express = require("express");
const router = express.Router();

const {getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    deleteProductById,
    UpdateProductById

}= require("../controller/product.controller");

router.get("/quotes",getProducts);
router.get("/:id",getProductById);
router.post("/add/quotes",addProduct);
router.delete("/delete/all/quotes",deleteProduct);
router.delete("/delete/:id",deleteProductById);
router.put("/update/:id",UpdateProductById);

module.exports = router;
