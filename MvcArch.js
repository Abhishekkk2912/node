require('dotenv').config();  //.env file configuration
const express = require("express");
const server = express();
const productRouter=require("./routes/prodRoutes"); 
const userRouter=require("./routes/userRoutes");  

console.log("env",process.env.DB_PASSWORD);

server.use(express.json());
server.use("/products",productRouter.routesProd); //this middleware is for router.
server.use("/users",userRouter.routesUser);

//now url becomes...=>localhost:8080/api/...

//all routes are in prodRoutes file for proper project structures...

server.listen(process.env.PORT, () => {   //port comes from env file...
  console.log("Rest server started");
});
