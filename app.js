import { config } from "dotenv-safe";
import jwt from 'jsonwebtoken';
import express from 'express';
import http from 'http';
import bodyParser from "body-parser";

import verifyJWT from "./middleware/verifyJWT.js";
import authRouter from "./routes/auth_routes.js";

config();

const app = express();
app.use(bodyParser.json());

// rota raíz para verificar se o servidor está funcionando
app.get('/', (req, res, next) => {
    res.json({ message: "Servidor base / funcionando!" });
});

// montagem do roteador de autenticação
app.use('/auth', authRouter);

// middleware para verificar e decodificar o token JWT
app.use(verifyJWT);

// criação do servidor HTTP
const server = http.createServer(app);

server.listen(3000)
console.log("Servidor em execução na porta 3000...");
