const Order = require('../models/Order');
const Product = require('../models/Product');


const createOrder = async(req,res)=>{
    const session = await Product.startSession();

    try{

        session.startTransaction();

        const {products} = req.body;

        const clientId = req.auth.userId;

        let totalPrice = 0;


        for(let item of products){

            const product = await Product.findById(item.productId)
                .session(session);


            if(!product){
                throw new Error("Produit introuvable");
            }


            const variant = product.variantes.find(
                v => v.nom === item.variant
            );


            if(!variant){
                throw new Error("Variante introuvable");
            }


            if(variant.stock < item.quantity){
                throw new Error("Stock insuffisant");
            }


            totalPrice += variant.price * item.quantity;


            variant.stock -= item.quantity;


            await product.save({session});

        }


        const order = new Order({
            products,
            totalPrice,
            client:clientId
        });


        await order.save({session});


        await session.commitTransaction();


        res.status(201).json({
            success:true,
            message:"Commande créée avec succès",
            order
        });



    }catch(error){

        await session.abortTransaction();


        res.status(500).json({
            success:false,
            message:error.message
        });


    }finally{

        session.endSession();

    }
}

const getClientOrders = async(req,res)=>{
    try{
        
        const clientId = req.auth.userId;

        const orders = await Order.find({
            client:clientId
        })
        .populate('products.productId')
        .populate('client', 'name email');


        res.status(200).json({
            success:true,
            orders
        });
    
    
    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message   
        });
    }
}

const getArtisanOrders = async(req,res) =>{

    try{
        const artisanId = req.auth.userId;

        //recuperer les produits de cet artisan
        const artisanProducts = await Product.find({
            artisan:artisanId
        });

        const productIds = artisanProducts.map(
            product => product._id
        );

        //chercher les commandes contenant ces produits
        const orders = await Order.find({
            'products.productId': {
                 $in: productIds 
                }
        })
        .populate('products.productId')
        .populate('client', 'name email');

        res.status(200).json({
            success:true,
            orders
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

const getAllOrders = async(req, res) =>{
    
    try{
        const orders = await Order.find()
        .populate('products.productId')
        .populate('client', 'name email');

        res.status(200).json({
            success:true,
            orders
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};
const changeOrderStatus = async (orderId, newStatus) => {

    const allowedStatus = [
        'PENDING',
        'CONFIRMED',
        'SHIPPED',
        'DELIVERED',
        'CANCELLED'
    ];


    if(!allowedStatus.includes(newStatus)){
        throw new Error("Statut invalide");
    }


    return await Order.findByIdAndUpdate(
        orderId,
        {
            order_status: newStatus
        },
        {
            new: true,
            runValidators:true
        }
    );

};

module.exports = {
    createOrder,
    getClientOrders,
    getArtisanOrders,
    getAllOrders,
    changeOrderStatus
};
    

