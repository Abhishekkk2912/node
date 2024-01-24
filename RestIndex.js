const fs = require("fs");
const express = require("express");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const morgan = require("morgan");

const server = express(); //server started here
server.use(express.json()); //body parser.
server.use(morgan("dev")); //logger
//Resource for API-products in data.json.

//CREATE API for products using POST.
server.post("/products", (req, res) => {
  products.push(req.body); //adding into product array..this is not saved in memory so this is in server memory only not in actual file.
  res.status(201).json(req.body); //sending response to the server..
});

//READ API for products using GET
server.get("/products", (req, res) => {
  res.json(products); //for read default 200 status is there...
});

//READ for specific product.
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  //   res.json(products[id-1]); //one way of getting is this but not company standard.
  const prd = products.find((p) => p.id === id);
  res.json(prd);
});

//UPDATE API for product using PUT.
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const prdIndex = products.findIndex((p) => p.id === id);
  products.splice(prdIndex, 1, { id: id, ...req.body }); //splice(start, deleteCount, item1, item2, /* …, */ itemN).
  res.status(204);
});

//Also PATCH is used to update the data but in that it doesn't overrides whole data it simply changes the things which comes in body.

//UPDATE API for product using PATCH.
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const prdIndex = products.findIndex((p) => p.id === id);
  const prod = products[prdIndex];
  products.splice(prdIndex, 1, { ...prod, ...req.body }); //{...prod,...req.body}here req.body has some properties which overrides the properties in prod...first elemnt properties overrides by second index properties.
  res.status(204);
});

//DELETE API for product using DELETE.
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const prdIndex = products.findIndex((p) => p.id === id);
  const prod = products[prdIndex];
  products.splice(prdIndex, 1);
  res.status(204);
});

server.listen(8080, () => {
  //server ended here(here first line of output is given then all statements in server start executing.)
  console.log("Rest server started");
});
