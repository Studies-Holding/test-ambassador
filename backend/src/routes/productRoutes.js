const express = require('express');
const router = express.Router();


const {createProduct, getApprovedProducts, updateProductStatus,getProductById, updateProduct,getMyProducts,deleteProduct,searchProducts} = require('../controllers/productController.js')
const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');

//route pour creer un produit
router.post(
    '/',
    authMiddleware, 
    roleMiddleware('ARTISAN'), 
    createProduct
);
// route pour recuperer les produits approuvés
router.get(
    '/',
    authMiddleware, 
    getApprovedProducts
);
// route pour mettre a jour le status d'un produit
router.patch(
    '/:id/status',
    authMiddleware, 
    roleMiddleware('ADMIN'), 
    updateProductStatus
);
//route pour rechercher des produits par le nom ou la description
router.get(
    '/search',
    authMiddleware,
    searchProducts
);

// route pour recuperer un produit par son id
router.get(
    '/:id',
    authMiddleware, 
    getProductById
);
// route pour mettre a jour un produit
router.put(
    '/:id',
    authMiddleware, 
    roleMiddleware('ARTISAN'), 
    updateProduct
);
// route pour recuperer les produits d'un artisan
router.get(
    '/my-products',
    authMiddleware, 
    roleMiddleware('ARTISAN'),
    getMyProducts
);
//route pour supprimer un produit
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('ARTISAN'),
    deleteProduct
); 

module.exports = router;
