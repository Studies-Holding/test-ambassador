const express = require('express');
const router = express.Router();

const {
    signUp,
    login,
    getMe
} = require('../controllers/usersController');

const authMiddleware = require('../middleware/authMiddleware');


// inscription
router.post('/signup', signUp);


// connexion
router.post('/login', login);


// utilisateur connecté
router.get(
    '/me',
    authMiddleware,
    getMe
);


module.exports = router;