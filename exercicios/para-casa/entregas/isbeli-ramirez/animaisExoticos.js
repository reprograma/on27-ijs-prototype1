const { vacinar, consultar, realizarProcedimentos } = require("./consultas")
const { historicosMedicos } = require("./historicosMedicos")

function animaisExotico(nome, idade, cor, especie) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.especie = especie
    this.historico = new historicosMedicos()
}

animaisExotico.prototype.vacinar = vacinar
animaisExotico.prototype.consular = consultar
animaisExotico.prototype.realizarProcedimentos = realizarProcedimentos
animaisExotico.prototype.ehAdulto = ehAdulto


function ehAdulto(especie) {
    const animaisExoticos = {
        'hamste': this.idade > 18,
        'papagaio': this.idade > 36,
        'calopsita': this.idade > 18,
    }
    return animaisExoticos[especie] || 'Animal não reconhecido'
}

//const animaisExotico = new animaisExotico("Pintinho Amarelinho", 1, "amarelo", "pintinho");
const animaisExoticos = new animaisExotico("Rene", 2, "cinza", "hamster");


console.log(animaisExoticos);
console.log(animaisExoticos.ehAdulto('pavo'));


module.exports = { animaisExoticos }