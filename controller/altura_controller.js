import Altura from "../models/altura_model.js";
import Pet from "../models/pet_model.js";

// selecionar as Alturas
export const getAltura = async (req, res) => {
    try {
        const alturas = await Altura.findAll();
        res.send(alturas);
    } catch (e) {
        console.log("Erro ao acessar a tabela Altura", e);
    }
};

// inserir uma Altura
export const createAltura = async (req, res) => {
    const { altura: alturaPet, codigo_pet } = req.body;

    try {
        // verificar se o Pet com o código fornecido existe
        const petExistente = await Pet.findOne({ where: { codigo_pet } });

        if (!petExistente) {
            return res.status(404).json({ 
                message: 'Pet não encontrado.' });
        }
        // função para determinar o porte do Pet com base na Altura
        const determinarPorte = (altura) => {
            if (altura <= 15) {
                return 'pequeno';
            } else if (altura > 15 && altura < 45) {
                return 'médio';
            } else {
                return 'grande';
            }
        };
        // determinar o porte do pet
        const descricaoAltura = determinarPorte(alturaPet);
        // criar a nova altura associada ao pet existente
        const novaAltura = await Altura.create({
            altura: descricaoAltura,
            codigo_pet
        });

        res.status(201).json(novaAltura);
    } catch (e) {
        console.log("Erro ao inserir nova Altura", e);
    }
};

/*
// atualizar uma Altura
export const updateAltura = async (req,res) => {
    const { altura } = req.body;
    const { id_altura } = req.params;

    try {
        await Altura.update(req.body,{
            where: {
                altura: req.params.id_altura
            }
        });
        res.json({
            "message":"A altura de código nº " + req.params.id_altura + " foi atualizada."
        });
    } catch (e) {
        console.log("Erro ao atualizar o registro Tutor.");
    }
};
*/