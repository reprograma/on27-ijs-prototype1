const { HistoricoMedico } = require('./HistoricoMedico');
const { consultar, vacinar, realizarProcedimento } = require('./Animais');

function ehAdulto() {
    let especieDoAnimal = this.especie

    switch (especieDoAnimal) {
        case 'hamster' || 'Hamster':
            return this.idade > 2;
        case 'calopsita' || 'Calopsita':
            return this.idade > 18
        case 'papagaio' || 'Papagaio':
            return this.idade > 36;

        default:
            return `Animal não reconhecido.`;
    }
}

function AnimalExotico(nome, idade, cor, especie) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historicoMedico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = ehAdulto;
AnimalExotico.prototype.consultar = consultar;
AnimalExotico.prototype.vacinar = vacinar;
AnimalExotico.prototype.realizarProcedimento = realizarProcedimento;

module.exports = { AnimalExotico };