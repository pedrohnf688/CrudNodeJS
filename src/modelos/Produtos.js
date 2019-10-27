const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProdutoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        default:Date.now
    }
});

ProdutoSchema.plugin(mongoosePaginate);

mongoose.model("Produto", ProdutoSchema);