//first step to import exprees
const exprees = require('express');
const dbConnection = require('./mongodb');

//here use express;
const app = exprees();

app.get ('/',async (req,resp)=>{
    let data = await dbConnection();
    data = await data.find().toArray();

    resp.send(data);

})

app.listen('4300');