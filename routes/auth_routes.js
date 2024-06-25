import express from 'express';
import { protectedExample, login, logout } from '../controller/auth_controller.js';
import verifyJWT from '../middleware/verifyJWT.js';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

// rota para realizar login e obter token JWT
authRouter.post('/login', login);

// rota para logout, invalidando o token
authRouter.post('/logout', logout);

// rota de exemplo protegida por token JWT
authRouter.get('/protectedExample', verifyJWT, protectedExample);

export default authRouter;