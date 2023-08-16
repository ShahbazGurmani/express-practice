const dbConnection = require('./mongodb');

//insert data
const insert =async ()=>{
    const db =await dbConnection();
    const result = db.insert(
        {
            name:'ali',
            city:'lahore',
            email:'ali@gmail.com',
            gender:"male"
        }
    )
}

insert();