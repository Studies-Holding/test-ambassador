const Product = require('../models/Product');
// creation d'un produit par l'artisan
const createProduct = async(req,res) =>{
    try{
        //recuperer les données envoyer ppar le frontend 
        const { name, description,variantes,images} = req.body;
       
        //creer un nouveau produit
        const product = new Product({
            name,
            description,
            variantes,
            images,
            artisan : req.auth.userId // recuperer l'id de l'artisan depuis le token d'authentification
        });


        //enregister un produit
        await product.save();

        //envoyer une reponse au frontend
        res.status(201).json({
            success:true,
            message:" produit créé avec succés",
            product

        });

    } 
    catch (error){
        res.status(500).json({
            success: false,
            message:" erreur lors de la creation du produit",
            error: error.message
        });

    }
};
// recuperer les produits approuvés
const getApprovedProducts = async ( req,res) =>{
   try{
    const products = await Product.find({status:"APPROVED"});
    res.status(200).json({
        success: true,
        products
    });
   }
   catch(error){
    res.status(500).json({
        success: false,
        message:"erreur lors de la recuperation des produits",
        error: error.message
    })
   }
}
// mettre a jour le status d'un produit
const updateProductStatus =async( req, res) =>{
    try{
        //recuperer l'id du produit
        const { id} = req.params;

        // recuperer le nouveau status
        const{status} = req.body;
        //mise a jour dans mongoDB
        const product  = await Product.findByIdAndUpdate(
            id,
            {status},
            { new :true}
        )

        // si le produit n'existe pas 
        if(!product){
            return res.status(404).json({
                success: false,
                message:'produit introuvable'
            });
        }
        res.status(200).json({
            success: true,
            message:' status mis a jour avec succés',
            product
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message:' erreur lors de la mise a jour du status',
            error : error.message
        });
    }   
};
// recuperer un produit par son id
const getProductById = async(req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                success: false,
                message:'produit introuvable'
            });
        }
        res.status(200).json({
            success: true,
            product
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message:' erreur lors de la recuperation du produit',
            error : error.message
        });
    }
};
// modification du prouit par l'artisan
const updateProduct = async(req,res) =>{
    try{
        const {id} = req.params;
        const {name, description, variantes} = req.body;

        const product = await Product.findOneAndUpdate(
            {
                _id: id,
                artisan: req.auth.userId
            },
            {
                name,
                description,
                variantes
            },
            {
                new:true
            }
        );

        if(!product){
            return res.status(404).json({
                success:false,
                message:"Produit introuvable ou non autorisé"
            });
        }

        res.status(200).json({
            success:true,
            message:"Produit mis à jour avec succès",
            product
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:"Erreur lors de la mise à jour du produit",
            error:error.message
        });
    }
};
// recuperer les produits d'un artisan
const getMyProducts = async(req,res) =>{
    try{
        const products = await Product.find({
            artisan: req.auth.userId
        });
        res.status(200).json({
            success: true,
            products
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message:' erreur lors de la recuperation des produits',
            error : error.message
        });
    }
};
// suppression d'un produit par l'artisan
const deleteProduct = async(req,res)=>{
    try{

        const product = await Product.findOneAndDelete({
            _id:req.params.id,
            artisan:req.auth.userId
        });


        if(!product){
            return res.status(404).json({
                success:false,
                message:"Produit introuvable"
            });
        }


        res.status(200).json({
            success:true,
            message:"Produit supprimé avec succès"
        });


    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};
// rechercher des produit par le nom  ou la description 
const searchProducts = async(req,res)=>{

    try{

        const {search}=req.query;


        const products = await Product.find({
            name:{
                $regex:search,
                $options:"i"
            },
            status:"APPROVED"
        });


        res.status(200).json({
            success:true,
            products
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
    createProduct,
    getApprovedProducts,
    updateProductStatus,
    getProductById,
    updateProduct,
    getMyProducts,
    deleteProduct,
    searchProducts

};