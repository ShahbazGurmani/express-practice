const dbConnection = require('./mongodb');

//update data 
const updateData = async() => {
    const db = await dbConnection();
    console.log(db);

}