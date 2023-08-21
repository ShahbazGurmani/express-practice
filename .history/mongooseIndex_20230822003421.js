const exprees = require('express');
require('./configMongoose');
const users = require('./users');

const app = exprees();
app.post('/',(req,resp)=>{
    resp.send("hello");
})
app.listen(4200);