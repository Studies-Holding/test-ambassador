const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required:true
            },

            quantity:{
                type:Number,
                required:true
            },

            variant:{
                type:String
            }
        }
    ],


    totalPrice:{
        type:Number,
        required:true
    },


    payment_status:{
        type:String,
        enum:[
            'PENDING_ESCROW',
            'PAID',
            'FAILED'
        ],
        default:'PENDING_ESCROW'
    },


    order_status:{
        type:String,
        enum:[
            'PENDING',
            'CONFIRMED',
            'SHIPPED',
            'DELIVERED',
            'CANCELLED'
        ],
        default:'PENDING'
    },


    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},
{
    timestamps:true
});


module.exports = mongoose.model('Order',orderSchema);