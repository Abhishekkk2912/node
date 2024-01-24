const express = require("express");
const userController = require("../controller/user");   //effective for MVC structure...
const router = express.Router();

//Server chaining...
router
  .post("/", userController.createUser)     //same meaning as ::products/ as it integrates in routes....also these are not bounds by product only
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .put("/:id", userController.updateUserPut)
  .patch("/:id", userController.updateUserPatch)
  .delete("/:id", userController.deleteUser);


exports.routesUser=router;