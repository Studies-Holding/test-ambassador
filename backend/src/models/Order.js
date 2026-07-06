const mongoose  = require ('mongoose');
const orderSchema = new mongoose.Schema({
    products: [
        {
            productId:{
                    type: mongoose.Schema.Types.ObjectId,              
                     ref:"Product",
                    required: true
            },
            quantity: {
                    type: Number,
                  required:true
            },
            variant:{
                    type: String
            }
        }
    ],
    totalPrice:{
        type: Number,
        required: true
    },

    payment_status:{
        type:String,
        enum:['PENDING_ESCROW','PAID','FAILED'],
        default: 'PENDING_ESCROW'
    },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

    
})

module.exports = mongoose.model('order',orderSchema)