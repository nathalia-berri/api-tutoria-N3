import Pet from "../models/pet_model.js";
import Tutor from "../models/tutor_model.js";

// selecionar os Pets
export const getPet = async (req, res) => {
    try {
        const pets = await Pet.findAll();
        res.send(pets);
    } catch (e) {
        console.log("Erro ao acessar a tabela Pet", e);
    }
};

// inserir um Pet
export const createPet = async (req, res) => {
    const { nome_pet, genero_pet, cpf_tutor } = req.body;

    try {
        // verificar se o tutor com o CPF fornecido existe
        const tutorExistente = await Tutor.findOne({ where: { cpf: cpf_tutor } });

        if (!tutorExistente) {
            return res.status(404).json({ 
                message: 'Tutor não encontrado.' 
            });
        }

        // criar o novo pet associado ao tutor existente
        const novoPet = await Pet.create({
            nome_pet,
            genero_pet,
            cpf_tutor
        });

        res.status(201).json(novoPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Erro ao criar novo pet.' 
        });
    }
};

// atualizar um Pet
export const updatePet = async (req,res) => {
    try {
        await Pet.update(req.body,{
            where: {
                codigo_pet: req.params.codigo_pet
            }
        });
        res.json({
            "message":"O Pet de código nº " + req.params.codigo_pet + " foi atualizado."
        });
    } catch (e) {
        console.log("Erro ao atualizar o registro Pet.");
    }
};

// apagar um Pet
export const deletePet = async (req, res) => {
    try {
        await Pet.destroy({
            where: {
                codigo_pet: req.params.codigo_pet
            }
        });
        res.json({
            "message":"O Pet de código nº " + req.params.codigo_pet + " foi excluído."
        });
    } catch (e) {
        console.log("Erro ao excluir registro Pet.");
    }
};