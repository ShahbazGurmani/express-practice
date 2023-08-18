const dbConnection = require('./mongodb');

//delete data 
const deleteData = async ()=>{
    const db = await dbConnection();
    const  result = await db.deleteOne({name:'fayaz'});

    if(result.acknowledged)
    {
        console.log("Data Deleted successfully");
    }

}

deleteData();