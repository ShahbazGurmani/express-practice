const express = require('express');
const app = express();
app.get("",(req,res)=>{

    res.send("hello i m home page");
})

app.listen(4200);