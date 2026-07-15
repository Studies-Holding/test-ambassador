const jwt = require ('jsonwebtoken');

const authMiddleware =  (req,res, next ) =>{
    try{
        //extraire le token du header d'autorisation de la requête entrante
        const token = req.headers.authorization.split(' ')[1];
        /* la fonction split  est utilisée pour diviser la chaîne d'autorisation en un tableau de sous-chaînes, 
        en utilisant l'espace comme séparateur. Le token est ensuite extrait du tableau en utilisant l'index 1,
         car le token est généralement le deuxième élément après le mot "Bearer". */

         // la fonction jwt.verify est utilisée pour vérifier la validité du token
         //  en utilisant la clé secrète définie dans les variables d'environnement.
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.auth = {
            userId: decodedToken.userId,
            role: decodedToken.role
        };
        
        next();
    } catch (error) {
        res.status(401).json({ 
            success: false,
            message: 'Token invalide' 
        });
    }
}
 module.exports = authMiddleware ;
