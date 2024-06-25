// importar o pacote sequelize
import { Sequelize } from "sequelize";

// configurar conexão com o banco de dados
const db = new Sequelize('tutoria', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
/* tutoria = nome da database
root = nome do usuário no MySQL
' ' = senha
*/

export default db 
// exportar a instância do sequelize para outros módulos

