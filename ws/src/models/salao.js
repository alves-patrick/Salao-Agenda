const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: String,
    foto: String,
    capa: String,
    email: String,
    senha: String,
    telefone: String,
    endereco: {
        
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
        estado: String,
     
    },        

    geo: {
        tipo: String,
        coordinates: Array,
    }
});

module.exports = mongoose.model('Salao', salao);