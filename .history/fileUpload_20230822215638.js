const express = require('express');
const multer = require('multer');
const app = express();


const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uplaods")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file")
app.post('/',upload,(req,resp)=>{
    resp.send("image upload");
})


app.listen(4400);