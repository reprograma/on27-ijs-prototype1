function Gatos(nome, idade, cor, castrado, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = historico;
};

function Cachorros(nome, idade, cor, castrado, raça, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = historico;
};

function AnimaisExoticos(nome, idade, cor, especie, adulto, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;
    this.historico = historico;
};

function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
};

