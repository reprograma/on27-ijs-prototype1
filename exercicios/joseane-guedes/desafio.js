function Animal(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.historico = new HistoricoMedico();
}

// Função construtora para o objeto Gato
function Gato(nome, idade, cor, castrado) {
    Animal.call(this, nome, idade, cor);
    this.castrado = castrado;
}

// Herda métodos de Animal
Gato.prototype = Object.create(Animal.prototype);

// Método específico para Gato
Gato.prototype.miar = function () {
    console.log("Meow!");
};

// Função construtora para o objeto Cachorro
function Cachorro(nome, idade, cor, castrado, raca) {
    Animal.call(this, nome, idade, cor);
    this.castrado = castrado;
    this.raca = raca;
}

// Herda métodos de Animal
Cachorro.prototype = Object.create(Animal.prototype);

// Método específico para Cachorro
Cachorro.prototype.latir = function () {
    console.log("Au Au Au!");
};

// Função construtora para o objeto AnimalExotico
function AnimalExotico(nome, idade, cor, especie) {
    Animal.call(this, nome, idade, cor);
    this.especie = especie;
}
// Herda métodos de Animal
AnimalExotico.prototype = Object.create(Animal.prototype);

// Método específico para AnimalExotico
AnimalExotico.prototype.ehAdulto = function () {
    const idadeLimitePorEspecie = {
        hamster: 2,
        papagaio: 36, // 3 anos
        calopsita: 18,
    };

    return this.idade >= idadeLimitePorEspecie[this.especie] || false;
};

function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

// Método para adicionar uma nova vacina ao histórico
HistoricoMedico.prototype.vacinar = function (novaVacina) {
    this.vacinas.push(novaVacina);
};

// Método para adicionar uma nova consulta ao histórico (em ordem cronológica reversa)
HistoricoMedico.prototype.consultar = function (dataConsulta) {
    this.consultas.unshift(dataConsulta);
};

// Método para adicionar um novo procedimento ao histórico
HistoricoMedico.prototype.realizarProcedimento = function (tipoProcedimento, motivoProcedimento) {
    this.procedimentos.push({ tipo: tipoProcedimento, motivo: motivoProcedimento });
};


module.exports = { AnimalExotico, Cachorro, Gato };
