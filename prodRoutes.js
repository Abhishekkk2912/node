const express = require("express");
const productController = require("../controller/product");   //effective for MVC structure...
const router = express.Router();

//Server chaining...
router
  .post("/", productController.createProd)     //same meaning as ::products/ as it integrates in routes....also these are not bounds by product only
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.updateProdPut)
  .patch("/:id", productController.updateProdPatch)
  .delete("/:id", productController.deleteProduct);


exports.routesProd=router;