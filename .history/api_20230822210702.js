//first step to import exprees
const exprees = require('express');
const dbConnection = require('./mongodb');
const mongodb = require('mongodb');



//here use express;
const app = exprees();
app.use(exprees.json());

app.get ('/',async (req,resp)=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    resp.send(data);

})

//api for post data;
app.post('/',async(req,resp)=>{
    let data = await dbConnection();
    let result = await data.insertOne(req.body);
    resp.send(result);
})

//api for update data
app.put('/:x',async(req,resp)=>{
    let data = await dbConnection();
    let result = data.updateOne(
        {name:req.params.x},
        {$set:req.body}
    )
    resp.send((await result).acknowledged);

})

//delete api
app.delete('/:id',async(req,resp)=>{
    let data = await dbConnection();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result);

})

//seacrch api 
app.get('/:key',(req,resp)=>{
    resp.send("ok");
})
app.listen('4300');