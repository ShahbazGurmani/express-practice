const exprees = require('express');
require('./configMongoose');
const users = require('./users');

const app = exprees();
app.use(exprees.json());
app.post('/',(req,resp)=>{

    console.log(req.body);
    resp.send('ok');
})
app.listen(4200);