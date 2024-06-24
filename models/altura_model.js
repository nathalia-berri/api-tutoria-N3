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
    descricao: { 
        type: DataTypes.STRING, 
    },
    codigo_pet: {
        type: DataTypes.INTEGER,
        references: {
            model: Pet, // referencia ao modelo Pet
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
// um pet tem uma altura (1:1)
Pet.hasOne(Altura, { foreignKey: 'codigo_pet' });
// uma altura pertence a um pet (1:1):
Altura.belongsTo(Pet, { foreignKey: 'codigo_pet' });

export default Altura;