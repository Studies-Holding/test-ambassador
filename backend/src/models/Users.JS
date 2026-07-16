const  mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        enum:['CLIENT', 'ARTISAN','ADMIN'],
        default:'CLIENT'
    },
    address:{
        type: String
    },
    contact: {
        type: String
    },
    sector:{
        type : String
    },
    Permissions: [{
       type: String,
      
    }]



})

userSchema.exports = mongoose.model('User',userSchema);

module.exports = mongoose.model('User',userSchema);
