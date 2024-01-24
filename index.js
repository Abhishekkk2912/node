const http = require("http");

const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
// const data = fs.readFileSync("data.json", "utf-8"); //this is to read file and we haven't change it so it read as string not json.
const data = JSON.parse(fs.readFileSync("data.json", "utf-8")); //this is json for the file..
const product = data.products;
const server = http.createServer((req, res) => {
    console.log(req.method);
  if (req.url.startsWith("/api")) {
    const id = req.url.split("/")[2]; //we have checked that our product id is in 2 index of that array return by split...
    const prd = product.find((p) => p.id === +id); //+ is used to convert string into number
    console.log(prd);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", prd.title)
      .replace("**price**", prd.price);
    res.end(modifiedIndex);
    return;  //if we dont use this then server run afterwards....
  }

  //   switch (req.url) {
  //     case "/":
  //       res.setHeader("Content-Type", "application/json");
  //       res.end(JSON.stringify(data)); //to convert it again into string...
  //       break;
  //     case "/api":
  //       res.setHeader("Content-Type", "text/html");
  //       let modifiedIndex = index
  //         .replace("**title**", product.title)
  //         .replace("**price**", product.price); //dynamic hosting...getting data from one file and using it in other...
  //       res.end(modifiedIndex);
  //       break;
  //     default:
  //       res.writeHead(404, "not found");
  //       res.end();
  //   }
  console.log("server started");
});

server.listen(8080);
