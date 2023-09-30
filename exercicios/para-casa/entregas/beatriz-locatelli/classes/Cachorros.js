const { HistoricoMedico } = require('./HistoricoMedico');

function Cachorros(nome, idade, cor, raça, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.raça = raça;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
    this.latir = () => {
        console.log(`O cachorro ${this.nome} late.`)
    }
}

module.exports = { Cachorros }