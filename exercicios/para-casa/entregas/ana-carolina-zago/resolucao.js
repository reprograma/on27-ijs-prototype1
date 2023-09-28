function Gatos(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    // this.historico = historico;
};

function Cachorros(nome, idade, cor, castrado, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    // this.historico = historico;
};

// function AnimaisExoticos(nome, idade, cor, especie, adulto, historico) {
//     this.nome = nome;
//     this.idade = idade;
//     this.cor = cor;
//     this.especie = especie;
//     this.adulto = adulto;
//     this.historico = historico;
// };

// function HistoricoMedico() {
//     this.consultas = [];
//     this.vacinas = [];
//     this.procedimentos = [];
// };

// vacinar TODOS

// consultar TODOS

// realizarProcedimento TODOS

// miar GATOS
Gatos.prototype.miar = function miar() {
    console.log(`O ${this.nome} está miando`);
}

// latir CACHORROS
Cachorros.prototype.latir = function latir() {
    console.log(`O ${this.nome} está latindo`);
}

// ehAdulto ANIMAL EXOTICO

module.exports = { Gatos, Cachorros }