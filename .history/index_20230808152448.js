const express = require('express');
const app = express();
const path = require('path');
// app.get("",(req,res)=>{

//     console.log("data sent by brwoser!",req.query.name)
//     res.send("hello i m home page bro");
// })

// app.get("/about",(req,res)=>{

//     res.send(`
//         <input type = "text" value ="${req.query.name}" placeholder ="Enter Your Name" />
//         <Button>Click me </Button>
//         <a href="/show">Show data</a>
//     `);
// })

// app.get("/show",(req,res)=>{

//     res.send({
//         name:'shahbaz',
//         email:'shahbazgurmani786@gmail.com'
//     });
// })


//let we start here html pages design and connection?!


const publicPath = path.join(__dirname,'Public')
console.log(publicPath);
app.use(express.static(publicPath));

app.listen(4200);