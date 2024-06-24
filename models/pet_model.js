// pet_models

import { Sequelize } from "sequelize";
const {DataTypes} = Sequelize;
import db from "../config/database.js";
import Altura from "./altura_model.js";
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
    altura: { 
        type: DataTypes.FLOAT, 
        foreignKey: true,
        references: {
            model: Altura, // referência ao modelo Altura
            key: 'id_altura' // chave primária da tabela Altura
        }
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
// um tutor tem muitos pets (1:n):
Tutor.hasMany(Pet, { foreignKey: 'cpf_tutor' });
// um pet pertence a um tutor (1:1):
Pet.belongsTo(Tutor, { foreignKey: 'cpf_tutor' });
  
export default Pet;