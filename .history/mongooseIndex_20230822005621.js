const exprees = require('express');
require('./configMongoose');
const users = require('./users');

const app = exprees();
app.use(exprees.json());

//post api:
app.post('/',async (req,resp)=>{
    let data = new users(req.body);
    let result = await data.save(); 

    console.log(result);
    resp.send("DAta inserted");
})

//get api:
  
app.get('/',async(req,resp)=>{
    let data = await users.find().toArray();
    resp.send(data);
})

app.listen(4200);