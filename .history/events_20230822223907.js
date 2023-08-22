const exprees = require('express');
const eventEmitter = require('events');

const event = new eventEmitter();

const app = exprees();

event.on("countApi",()=>{
    console.log("event count");
})

app.get('/',(req, resp)=>{
    resp.send("api called");
    event.emit("countApi");
});

app.post('/',(req, resp)=>{
    resp.send("post api called");
});

app.put('/',(req, resp)=>{
    resp.send("update api");
});

app.listen(5000);