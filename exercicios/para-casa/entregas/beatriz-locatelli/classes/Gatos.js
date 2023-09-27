const { HistoricoMedico } = require('./HistoricoMedico');

function Gatos(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
    
    this.miar = () => {
        console.log(`O gato ${this.nome} mia.`)
    }
   
}

module.exports = { Gatos }