// const express = require('express');
// const app = express();
// const path = require('path');

// const publicPath = path.join(__dirname,'Public')
// app.set('view engine','ejs'); 


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



// app.get('',(req,resp)=>{

//     resp.sendFile(`${publicPath}/index.html`);
// })

// app.get('/about',(req,resp)=>{

//     resp.sendFile(`${publicPath}/about.html`);
// })


// app.get('*',(req,resp)=>{

//     resp.sendFile(`${publicPath}/pageNotFound.html`);
// })

// app.use(express.static(publicPath));

// app.get('/profile',(req,resp)=>{
//     const data = {
//         name:'shahbaz',
//         email:'shahbaz@gmail,com',
//         city:"lahore",
//         skill:["php", "mobile app", "javascript"]
//     }
//     resp.render('profile',{data});
// })

// app.get('/login',(req,resp)=>{
//     resp.render('login')
// })
// app.listen(4200);




//start for creating middle ware:
// const express = require('express');
// const app = express();

// const reqFilter = require('./middleWare');

// //apply middleware on specific routs:
// const routs = express.Router();
// routs.use(reqFilter);
// // app.use(reqFilter);
// routs.get('' ,(req, resp)=>{

//     resp.send("welcome to home page");
// })

// routs.get('/user' ,(req, resp)=>{

//     resp.send("welcome to user page");
// })

// app.get('/contact', (req, resp)=>{

//     resp.send("welcome to contact page");
// })

// app.use('/',routs)
// app.listen(4300)




// console.log(dbConnection);


// 1st method ......................................................
// dbConnection().then((resp)=>{
//     resp.find({name:'shahbaz gurmani'}).toArray().then((data)=>{
//         console.log(data);
//     })

// })
//2nd method..........................................................
const dbConnection = require('./mongodb')
const main =async ()=>{
    let data = await dbConnection();
    data =await data.find().toArray();
    console.log(data); 
}

main();