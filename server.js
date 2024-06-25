import express from "express";
import cors from "cors";
import db from "./config/database.js"

import router from "./routes/tutor_routes.js"; 

// base para construir as rotas
const server = express();
server.use(express.json());
server.use(cors());

// teste a conexão com o banco de dados
try { 
    await db.authenticate();
    console.log("Conexão com o Mysql estabelecida.");
} catch (e) {
    console.log("ERRO: Conexão com o MySQL não estabelecida.", e);

}

// rotas, microframework do Express
server.use(tutor_routes);
/*
server.use(pet_routes);
server.use(altura_routes);
*/

server.use(loginRoutes);

server.listen(5000, () => console.log("Servidor em execução em http://localhost:5000"));