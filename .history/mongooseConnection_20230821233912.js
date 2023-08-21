const mongoose = require('mongoose');


//lets craete a function to connct mongodb
const main =async ()=>{
    //mongooses schema and mangoose modal
    await mongoose.connect("mongodb://127.0.0.1:27017/mango-practice");
    const userSchema = new mongoose.Schema({
        name:String
    });
    
    //here we use mangoose model
    const usersModel = new mongoose.model('users',userSchema);
    let data = new usersModel({name:'rashid'});
    let result = await data.save(); 

    console.log(result);

}
main();