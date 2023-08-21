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
    let data = await users.find();
    resp.send(data);
})

//update api:
app.put('/:name',async(req,resp)=>{
    let data = await users();
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    let res =await result.save();
    console.log(res);
    resp.send("Updated");
})

app.listen(4200);