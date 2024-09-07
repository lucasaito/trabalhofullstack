const axios = require('axios');
const { Pessoa } = require('../models');
console.log(Pessoa)


exports.createPessoa = async (req, res) => {
    try {
        const {id, nome, cpf, telefone} = req.body;
        
        const novoPessoa = await Pessoa.create({
            id,
            nome,
            cpf,
            telefone,
        });

        res.status(201).json(novoPessoa);
    }catch(error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message});
    }
};

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoa = await Pessoa.findAll();
        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message});
    }
};

exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada'});
        }

        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message});
    }
}

exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const {Nome, Cpf, Telefone} = req.body;

        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrado'})
        }

        pessoa.nome = nome;
        pessoa.cpf = cpf;
        pessoa.telefone = telefone;
        
        await pessoa.save();

        res.status(200).json(pessoas)
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message})
    }
}

exports.deletePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id)

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada'})
        }

        await pessoa.destroy();

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message})
    }
}