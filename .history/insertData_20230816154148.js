const dbConnection = require('./mongodb');

//insert data
const insert = ()=>{
    const db = dbConnection();
    console.log(db);
}

insert();