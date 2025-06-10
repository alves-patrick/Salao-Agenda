const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: String,
    foto: String,
    capa: String,
    email: String,
    senha: String,
    telefone: String,
    email: String,        
});

module.exports = mongoose.model('Salao', salao);