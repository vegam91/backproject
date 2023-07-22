const adminMiddleware = (req, res, next) => {
  
    if (req.user.isAdmin) {
  
      next();
    } else {
      
      res.status(403).json({ message: 'Acceso no autorizado. Se requiere permiso de administrador.' });
    }
  };
  
  module.exports = adminMiddleware;