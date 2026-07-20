const mongoose = require('mongoose')

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../models/Users');

//fonction qui sera appelée lorsqu'un utilisateur viendra pour s'authentifier ou s'inscrire
exports.signUp = async (req, res) => {
    try{

        const { name, email, password, role, address, contact, sector, permissions } = req.body;

        // vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Cet utilisateur existe déjà' });
        }


        //transformer le mot de passe en hash( chaine chiffrée) pour le stocker dans la base de données
        const hash = await bcrypt.hash(password, 10);

        // créer un nouvel utilisateur avec les informations fournies
        const user = new User({
            name,
            email,
            password: hash,
            role,
            address,
            contact,
            sector,
            permissions
        });

        await user.save();

        res.status(201).json({ 
            success: true,
            message: 'Utilisateur créé avec succès', 
            user: {
                id: user._id,
                email: user.email,
            }
        });

    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message    
        });
    }
};

exports.login = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: 'Utilisateur non trouvé'
                
            });
        }

        //comparer le mot de passe fourni avec le mot de passe stocké dans la base de données
        const valid = await bcrypt.compare(req.body.password, user.password);

        if (!valid) {
            return res.status(401).json({ 
                success: false,
                message: 'Mot de passe incorrect' 
            });
        }

        res.status(200).json({
                success: true,
                userId: user._id,
                role: user.role,
                token: jwt.sign({ userId: user._id,
                    role: user.role
                 }, process.env.JWT_SECRET, { expiresIn: '1h' })
            });

    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message    
        });
    }
};

exports.getMe = async (req, res) => {
    try {

        const user = await User.findById(req.auth.userId)
            .select('-password');


        if(!user){
            return res.status(404).json({
                success:false,
                message:"Utilisateur introuvable"
            });
        }


        res.status(200).json({
            success:true,
            user
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
// permettre a l'admin de voir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    try {

        const users = await User.find()
            .select('-password');

        res.status(200).json({
            success: true,
            users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};