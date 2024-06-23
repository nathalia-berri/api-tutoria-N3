import { config } from "dotenv-safe";
config();
import jwt from "jsonwebtoken";
import http from "http";
import express from "express";
import bodyParser from "body-parser";

// base para construir as rotas
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message:"Servidor base '/' esta no ar"});
})

// mockado = gerar um dado que deveria estar no banco de dados
app.get('/exemplo', verifyJWT, (req, res, next) => {
    console.log("Retorno do exemplo mockado...");
    res.json([{id:1,nome:'nathalia'}])
})

app.post('/login', (req, res, next) => {
    if ((req.body.user === 'nathalia') && (req.body.pwd === '123')) {
        const id = 1;
        const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn:300
        })
        return res.json({ auth: true, token: token});
    }
    res.status(500).json({message: 'login invalido!'});
})

// zerar o token, que a autenticação é inválida
app.post('/logout', function(req, res) {
    res.json ({ auth: false, token: null});
})

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({auth: false, message: "Nao ha token"});
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({auth: false, message:"Erro com a autenticacao"})

        req.userID = decoded.id;
        next();
    })
}

const server = http.createServer(app);
server.listen(3000);
console.log("Servidor em execucao porta 3000...");
