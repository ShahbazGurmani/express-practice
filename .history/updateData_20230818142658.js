const dbConnection = require('./mongodb');

//update data 
const updateData = async() => {
    let db = await dbConnection();
    
   let result = await db.updateOne({name:'fayaz'},{$set:{name:'arsalan'}});
   console.log(result);

}

updateData();