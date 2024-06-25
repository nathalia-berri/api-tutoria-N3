import jwt from 'jsonwebtoken';

// middleware para verificar e decodificar o token JWT
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: "Token não fornecido" });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ 
            auth: false, message: 'Erro com a Autenticação do token' });

        req.userId = decoded.id;
        next();
    });
}

export default verifyJWT;