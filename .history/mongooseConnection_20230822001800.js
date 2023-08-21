const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mango-practice");

 //mongooses schema and mangoose modal
    
 const userSchema = new mongoose.Schema({
    name:String,
    city:String,
    email:String,
    gender:String,
});

//lets craete a function to connct mongodb
const SaveData =async ()=>{

    //here we use mangoose model
    const usersModel = mongoose.model('users',userSchema);
    let data = new usersModel({name:'asif khan',city:'lahore',email:'asii@gamail.com',gender:'male'});
    let result = await data.save(); 

    console.log(result);

}
// SaveData();

// update data into db;
const dataUpate = async()=>{
    const usersModel = mongoose.model('users',userSchema);
    let data = await usersModel.updateOne(
        {name:'rashid'},
        {$set:{city:'fsd',email:'ras@gamil.com',gender:'male'}}
    )

    console.log(data);

}

// dataUpate();

const deleteData = async ()=>{
    const usersModel = mongoose.model('users',userSchema);
    let data = await usersModel.deleteOne({name:'rashid',city:'lahore'})
    console.log(data);
}

// deleteData();

const showData = async ()=>{
    const usersModel = mongoose.model('users',userSchema);
    let data = await usersModel.find();
    console.log(data);
}
showData();