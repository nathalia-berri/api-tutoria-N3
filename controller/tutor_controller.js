import Tutor from "../models/tutor_model.js";
import Pet from "../models/pet_model.js";

// selecionar os Tutores
export const getTutor = async (req, res) => {
    try {
        const tutores = await Tutor.findAll();
        res.send(tutores);
    } catch (e) {
        console.log("Erro ao acessar a tabela Tutor", e);
    }
};

// adicionar um Tutor
export const createTutor = async (req, res) => {
    try {
        await Tutor.create(req.body);
        res.json({
            "message":"Um novo registro de Tutor foi inserido."
        });
    } catch (e) {
        console.log("Erro ao inserir um novo registro na tabela Tutor.", e);
    }
};

// atualizar um Tutor
export const updateTutor = async (req,res) => {
    try {
        await Tutor.update(req.body,{
            where: {
                cpf: req.params.cpf
            }
        });
        res.json({
            "message":"O Tutor de cpf nº " + req.params.cpf + " foi atualizado."
        });
    } catch (e) {
        console.log("Erro ao atualizar o registro Tutor.");
    }
};

// apagar um Tutor
export const deleteTutor = async (req, res) => {
    try {
        await Tutor.destroy({
            where: {
                cpf: req.params.cpf
            }
        });
        res.json({
            "message":"O Tutor de cpf nº " + req.params.cpf + " foi excluída."
        });
    } catch (e) {
        console.log("Erro ao excluir registro Tutor.");
    }
};

// obter os pets de um tutor específico
export const getPetsByTutor = async (req, res) => {
    try {
        const tutor = await Tutor.findOne({
            where: { cpf: req.params.cpf },
            include: [Pet]
        });
        if (tutor) {
            res.send(tutor.pet);
        } else {
            res.status(404).json({ 
                message: "Tutor não encontrado." 
            });
        }
    } catch (e) {
        console.log("Erro ao acessar os Pets do Tutor", e);
    }
};