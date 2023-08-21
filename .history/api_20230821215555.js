//first step to import exprees
const exprees = require('express');
const dbConnection = require('./mongodb');

app.use(exprees.json());

//here use express;
const app = exprees();

app.get ('/',async (req,resp)=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    resp.send(data);

})

//api for post data;
app.post('/',(req,resp)=>{
    console.log(req.body);
    resp.send({name:'shahbaz'});
})

app.listen('4300');