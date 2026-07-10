const mongoose =  require('mongoose');
const productSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    variantes:[

     {  name: {
            type: String,
            required: true
        },
        stock: {
            type:Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
     }        
    ],
    status:{
        type: String ,
        enum: ['PENDING','APPROVED','REJECTED'],
        default:'PENDING'
    },
   artisan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
images:[
    {
        type:String
    }
],

},
{
    timestamps:true
});


module.exports = mongoose.model('Product', productSchema);