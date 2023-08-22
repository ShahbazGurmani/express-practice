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
    let data = await users.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    
    
    resp.send(data);
})

//delete Api:
app.delete('/:_id',async(req,resp)=>{
    let data = await users.deleteOne(
       req.params
    )
    resp.send(data);
})

//seacrch api 
app.get('/:key',(req,resp)=>{
   let data = users.find();
   resp.send(data);
})

app.listen(4200);