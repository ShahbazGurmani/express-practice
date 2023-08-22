const exprees = require('express');
const eventEmitter = require('events');

const event = new eventEmitter();

const app = exprees();
let count = 0;
event.on("countApi",()=>{
    console.log("event called"+"="+(++ount));
   
})

app.get('/',(req, resp)=>{
    resp.send("api called");
    event.emit("countApi");
});

app.post('/',(req, resp)=>{
    resp.send("post api called");
    event.emit("countApi");
});

app.put('/',(req, resp)=>{
    resp.send("update api");
    event.emit("countApi");
});

app.listen(5000);