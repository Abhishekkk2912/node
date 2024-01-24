require("dotenv").config();
const express = require("express");
const server = express();
const productRouter = require("./routes/prodRoutes");
const userRouter = require("./routes/userRoutes");

console.log("env", process.env.DB_PASSWORD);

server.use(express.json());
server.use("/products", productRouter.routesProd);
server.use("/users", userRouter.routesUser);

server.listen(process.env.PORT, () => {
  console.log("Rest server started");
});
