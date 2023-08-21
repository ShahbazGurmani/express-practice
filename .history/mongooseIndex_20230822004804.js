const exprees = require('express');
require('./configMongoose');
const users = require('./users');

const app = exprees();
app.use(exprees.json());
app.post('/',async (req,resp)=>{
    let data = new users(req.body);
    let result = await data.save(); 

    console.log(result);
    resp.send(result);
})
app.listen(4200);