const express = require('express');
const router = express.Router();

const {
    getAllUsers
} = require('../controllers/usersController');

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');


router.get(
    '/',
    authMiddleware,
    roleMiddleware('ADMIN'),
    getAllUsers
);


module.exports = router;