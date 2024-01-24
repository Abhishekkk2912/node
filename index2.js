const fs = require("fs");
const express=require("express");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const morgan=require('morgan');
//sequence plays importance...

const server=express();  //server starts here...

//third party middleware=>morgan for logger...

// server.use(morgan('dev'));
// server.use(morgan('default'));


// server.use((req,res,next)=>{  //this can be a logger middleware...
//     // console.log(req.method,req.ip,req.hostname);
//     console.log(new Date(),req.get("User-Agent")); //this is for logging purpose....IMPORTANT.
//     next();  //without this next req doesnt get any response.From here we can go to another middleware.
// })

// const auth1=(req,res,next)=>{
//     if(req.query.password==="123"){
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }

// server.get('/',auth1,(req,res)=>{
//     res.json(data);
// })

// server.use(express.json());  //use to read body of json type in req hitting...without this it will throw error.

// const auth2=(req,res,next)=>{
//     if(req.body.password==="123"){   //body is to hide password...
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }

// server.post('/',auth2,(req,res)=>{
//     res.json({"type":"POST"});
// })

server.get('/product/:id',(req,res)=>{   //:id is variable parameter means after product/... anything can came
    res.send("hello");
    console.log(req.params);     //these are known as URL PARAMETERS....
})


// server.get('/',(req,res)=>{
//     res.json(data);
//     // res.send("hello");
//     // res.sendFile("C:/Users/lenovo/Desktop/node.js/index.html");  //need absolute path not relative path..
// });


server.listen(8080,()=>{
    console.log("server started");  //server ends here...
});