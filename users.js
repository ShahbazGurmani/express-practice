const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name:String,
        city:String,
        email:String,
        gender:String,
    }
);

module.exports = mongoose.model('users',userSchema);
