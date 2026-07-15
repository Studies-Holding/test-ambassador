const roleMiddleware = (role) => {
    return (req, res, next) => {
        if ( req.auth.role !== role) {
            return res.status(403).json({ 
                success: false,
                message: 'Accès refusé' 
            });
        }
        next();
    };
}
module.exports = roleMiddleware;