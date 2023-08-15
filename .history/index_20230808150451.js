const express = require('express');
const app = express();
app.get("",(req,res)=>{

    console.log("data sent by brwoser!",req.query.name)
    res.send("hello i m home page bro");
})

app.get("/about",(req,res)=>{

    res.send(`
        <input type = "text" placeholder ="Enter Your Name" />
        <Button>Click me </Button>
    `);
})

app.listen(4200);