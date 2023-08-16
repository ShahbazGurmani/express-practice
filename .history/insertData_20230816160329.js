const dbConnection = require('./mongodb');

//insert data
const insert = async ()=>{
    const db = await dbConnection();
    const result = db.insertOne({
        name:'kamran',city:'lahore',email:'kami@gmail.com',gender:'male'
    })
}

insert();