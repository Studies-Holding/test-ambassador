const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// utiliser les routes produits
const productRoutes = require('./routes/productRoutes.js')
const orderRoutes = require('./routes/orderRoutes.js')
const userRoutes = require('./routes/usersRoutes.js')
const authRoutes = require('./routes/authRoutes.js')
const app = express();


mongoose.connect('mongodb+srv://ILARY-D:Dayna2006@cluster0.1rxdwzm.mongodb.net/?appName=Cluster0')
.then(() => {
    console.log('Connexion à MongoDB réussie');
})
.catch((error) => {
    console.log('Connexion à MongoDB échouée', error);
});



// lire les donnees de Json
app.use(express.json());
// permettre au frontend de communiquer avec le backend 
app.use(cors());

app.use('/products', productRoutes);
app.use ('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);


app.get('/', (req,res) => {
    res.json({ message: 'bienvenue sur ma vitrine locale'})
})



module.exports = app;