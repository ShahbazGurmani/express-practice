//attach mongoDB with node js .........................................................
// const { name } = require('ejs');
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'mango-practice';

const client = new MongoClient(url);


//craeting a function for getting data from database;
async function dbConnection()
{
    let result = await client.connect();
    let db = result.db(database);
     return db.collection('users');
   
}

module.exports=dbConnection;