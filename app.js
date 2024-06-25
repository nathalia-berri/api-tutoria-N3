import { config } from "dotenv-safe";
import jwt from 'jsonwebtoken';
import express from 'express';
import http from 'http';
import bodyParser from "body-parser";

config();
const app = express();
app.use(bodyParser.json());

// rota raíz para verificar se o servidor está funcionando
app.get('/', (req, res, next) => {
    res.json({ message: "Servidor base / funcionando!" });
});

// rota de exemplo protegida por token JWT
app.get('/exemplo', verifyJWT, (req, res, next) => {
    console.log("Retorno do exemplo 'mockado'...");
    res.json([{ id: 1, nome: 'william' }]);
});

// rota para realizar login e obter token JWT
app.post('/login', (req, res, next) => {
    const { user, pwd } = req.body;
    // verifica se as credenciais são válidas
    if (user === 'william' && pwd === '123') {
        const id = 1;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expira em 5 minutos (300 segundos)
        });
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({ 
        message: "Login Inválido!" });
});

// rota para logout, invalidando o token
app.post('/logout', (req, res) => {
    res.json({ auth: false, token: null });
});

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

// criação do servidor HTTP
const server = http.createServer(app);

server.listen(5000)
console.log("Servidor em execução na porta 5000...");
