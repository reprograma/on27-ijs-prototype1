const { HistoricoMedico } = require('./HistoricoMedico');

function AnimaisExoticos(nome, idade, cor, especie, adulto) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
    this.adulto = adulto
    this.ehAdulto = () => {
        if (this.especie === 'Hamster' && this.idade >= '3'){
            return true
        }
        if (this.especie === 'Papagaio' && this.idade >= '12'){
            return true
        }
        if (this.especie === 'Calopsita' && this.idade >= '18'){
            return true
        } else {
            return false
        }
    }
}

module.exports = { AnimaisExoticos }