const express = require('express');
const app = express();
app.get("",(req,res)=>{

    res.send("hello i m home page");
})

app.get("/about-us",(req,res)=>{

    res.send("hello i m about us page");
})

app.listen(4200);