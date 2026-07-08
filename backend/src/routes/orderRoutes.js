const express = require('express');
const router = express.Router();

const { 
    createOrder,
    getClientOrders,
    getArtisanOrders,
    getAllOrders ,  
} = require('../controllers/orderController.js');

const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');

router.post(
    '/',
    authMiddleware,
    roleMiddleware('CLIENT'),
    createOrder
);

router.get(
    '/my-orders',
    authMiddleware,
    roleMiddleware('CLIENT'),
    getClientOrders
);

router.get(
    '/artisan-orders',
    authMiddleware,
    roleMiddleware('ARTISAN'),
    getArtisanOrders
);
router.get(
    '/',
    authMiddleware,
    roleMiddleware('ADMIN'),
    getAllOrders
);


module.exports = router;