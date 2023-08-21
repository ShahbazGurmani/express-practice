const mongoose = require('mongoose');

await mongoose.connect("mongodb://127.0.0.1:27017/mango-practice");
//lets craete a function to connct mongodb
const SaveData =async ()=>{
    //mongooses schema and mangoose modal
    
    const userSchema = new mongoose.Schema({
        name:String,
        city:String,
        email:String,
        gender:String,
    });
    
    //here we use mangoose model
    const usersModel = new mongoose.model('users',userSchema);
    let data = new usersModel({name:'asif khan',city:'lahore',email:'asii@gamail.com',gender:'male'});
    let result = await data.save(); 

    console.log(result);

}
SaveData();

//update data into db;
// const dataUpate = async()=>{
//     const usersModel = mongoose.model('users',userSchema);
//     let data = await usersModel.updateOne(
//         {name:'rashid'},
//         {$set:{city:'fsd',email:'ras@gamil.com',gender:'male'}}
//     )

//     console.log(data);

// }