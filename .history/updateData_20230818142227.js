const dbConnection = require('./mongodb');

//update data 
const updateData = async() => {
    let db = await dbConnection();
    console.log(db);
   

}

updateData();