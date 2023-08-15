//here we are adding middleware
module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Plaese provide age");
    }else if(req.query.age<18){
        resp.send("you cannot access this page");
    }
    else
    {
        next();
    }
   
}