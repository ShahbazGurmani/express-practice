//first step to import exprees
const exprees = require('express');
const dbConnection = require('./mongodb');

//here use express;
const app = exprees();

app.get ('/',(req,resp)=>{
    resp.send({name:'shahbaz'});

})

app.listen('4300');