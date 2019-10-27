const mongoose = require("mongoose");

const produtos = mongoose.model("Produto");

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const listaProdutos = await produtos.paginate({},{page, limit: 10});
        return res.json(listaProdutos);
    },
    async cadastrar(req, res){
        const produto = await produtos.create(req.body);
        return res.json(produto);
    },
    async buscarPorId(req, res){
        const produto = await produtos.findById(req.params.id);
        return res.json(produto);
    },
    async atualizarPorId(req, res){
        const produto = await produtos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(produto);
    },
    async deletarPorId(req, res){
        await produtos.findByIdAndDelete(req.params.id);
        return res.send();
    }
};

