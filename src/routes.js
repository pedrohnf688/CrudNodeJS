const express = require("express");
const routes = express.Router();

const ProdutosController = require("./controller/ProdutosController");
routes.get("/produtos", ProdutosController.index);
routes.post("/produtos", ProdutosController.cadastrar);
routes.get("/produtos/:id", ProdutosController.buscarPorId);
routes.put("/produtos/:id",ProdutosController.atualizarPorId);
routes.delete("/produtos/:id",ProdutosController.deletarPorId);

module.exports = routes;