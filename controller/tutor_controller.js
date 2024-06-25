import Tutor from "../models/tutor_model.js";

export const getTutor = async (req, res) => {
    try {
        const tutores = await tutor.findAll();
        res.send(tutores);
    } catch (e) {
        console.log("Erro ao acessar a tabela Tutor", e);
    }
}

export const createTutor = async (req, res) => {
    try {
        await Tutor.create(req.body);
        res.json({
            "message":"Um novo registro de Tutor foi inserido."
        })
    } catch (e) {
        console.log("Erro ao inserir um novo registro na tabela Tutor", e);
    }
}

export const updateTutor = async (req,res) => {
    try {
        await Tutor.update(req.body,{
            where: {
                cpf: req.params.cpf
            }
        })
        res.json({
            "message":"A categoria " + req.params.cpf + " foi atualizada."
        })
    } catch (e) {
        console.log("Erro ao atualizar o registro Tutor.");
    }
}

export const deleteTutor = async (req, res) => {
    try {
        await Tutor.destroy({
            where: {
                cpf: req.params.cpf
            }
        })
        res.json({
            "message":"A categoria " + req.params.cpf + " foi excluída."
        })
    } catch (e) {
        console.log("Erro ao excluir registro Tutor");
    }
}