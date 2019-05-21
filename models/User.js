const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    message: String
});

// collection name will be user(s) by default 
// or you can add third para to whatever you like
//const user = mongoose.model('User', userSchema); 
module.exports = mongoose.model('User', userSchema);