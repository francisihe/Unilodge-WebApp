const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
    role: {type:String, default: 'regular'},
    bookmarks: [{type:mongoose.Schema.Types.ObjectId, ref:'Property'}],
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;