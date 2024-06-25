// altura_models

import { Sequelize } from "sequelize";
const {DataTypes} = Sequelize;
import db from "../config/database.js";
import Pet from "./pet_model.js";


const Altura = db.define('altura', {
    id_altura: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    altura: { 
        type: DataTypes.STRING(50), 
    },
    codigo_pet: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pet', // referencia ao modelo Pet
            key: 'codigo_pet' // chave primária da tabela Pet
        }
    }
},
    {
        tableName: 'altura',
        timestamps: false,
        freezeTableName: true 
    });

// ORM: Mapeamento Objeto-Relacional
// uma altura pertence a um pet (1:1):
Altura.belongsTo(Pet, { foreignKey: 'codigo_pet' });

export default Altura;