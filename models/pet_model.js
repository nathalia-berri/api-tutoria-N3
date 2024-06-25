// pet_models

import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;
import db from "../config/database.js";
import Tutor from "./tutor_model.js";

const Pet = db.define('pet', {
    codigo_pet: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    nome_pet: { 
        type: DataTypes.STRING(50)
    },
    genero_pet: { 
        type: DataTypes.STRING(50)
    },
    cpf_tutor: {
        type: DataTypes.INTEGER,
        references: {
            model: Tutor, // referência ao modelo Tutor
            key: 'cpf' // chave primária da tabela Tutor
        }
    },
}, 
    {
        tableName: 'pet',
        timestamps: false,
        freezeTableName: true 
    });

// ORM: Mapeamento Objeto-Relacional
// um pet pertence a um tutor (1:1):
Pet.belongsTo(Tutor, { foreignKey: 'cpf_tutor' });
  
export default Pet;