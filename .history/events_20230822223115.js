const exprees = require('express');
const eventEmitter = require('events');

const app = exprees();

app.get('/',(req, resp)=>{
    resp.send("api called");
});

app.listen(5000);