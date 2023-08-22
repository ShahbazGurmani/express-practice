const exprees = require('express');
const eventEmitter = require('events');

const app = exprees();

app.get('/',(req, resp)=>{
    resp.send("api called");
});

app.post('/',(req, resp)=>{
    resp.send("post api called");
});

app.put('/',(req, resp)=>{
    resp.send("update api");
});

app.listen(5000);