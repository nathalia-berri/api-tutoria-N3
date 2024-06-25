// tutor_models

import { Sequelize } from "sequelize"; // importa o módulo Sequelize
const { DataTypes } = Sequelize; // extrai as DataTypes (definidor de tipos de dados) do Sequelize
import db from "../config/database.js"; // importa a configuração do banco de dados

// definindo a tabela Tutor
const Tutor = db.define('tutor', {
  cpf: { 
    type: DataTypes.INTEGER, 
    primaryKey: true 
  },
  nome: { 
    type: DataTypes.STRING(100), 
  },
  email: { 
    type: DataTypes.STRING(100), 
  }
}, {
  tableName: 'tutor', // definir o nome da tabela
  timestamps: false, // desativa os campos createdAt e updatedAt
  freezeTableName: true // impede a pluralização do nome da tabela
});

export default Tutor;