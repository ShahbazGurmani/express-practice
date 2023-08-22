const express = require('express');
const multer = require('multer');
const app = express();


app.post('/',(req,resp)=>{
    resp.send("image upload");
})