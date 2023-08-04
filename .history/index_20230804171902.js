const express = require('express');
const app = express();
app.get("",(res,req)=>{

    res.send("hello i m home page");
})

app.listen(4200);