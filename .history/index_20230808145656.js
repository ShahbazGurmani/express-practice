const express = require('express');
const app = express();
app.get("",(req,res)=>{

    console.log("data sent by brwoser!",req.query)
    res.send("hello i m home page bro");
})

app.get("/about",(req,res)=>{

    res.send("hello i m about us page");
})

app.listen(4200);