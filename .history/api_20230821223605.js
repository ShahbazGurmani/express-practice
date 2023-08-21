//first step to import exprees
const exprees = require('express');
const dbConnection = require('./mongodb');



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
app.put('/:name',async(req,resp)=>{
    let data = await dbConnection();
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    resp.send((await result).acknowledged);

})

app.listen('4300');