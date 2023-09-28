function Gatos(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico;
};

function Cachorros(nome, idade, cor, castrado, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = new HistoricoMedico;
};

function AnimaisExoticos(nome, idade, cor, especie, adulto) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;
    this.historico = new HistoricoMedico;
};

function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
};

// miar GATOS
Gatos.prototype.miar = function miar() {
    console.log(`O ${this.nome} está miando`);
}

// latir CACHORROS
Cachorros.prototype.latir = function latir() {
    console.log(`O ${this.nome} está latindo`);
}

// ehAdulto ANIMAL EXOTICO
AnimaisExoticos.prototype.ehAdulto = function ehAdulto() {
    this.adulto = true;

    if(this.especie === "hamster" && this.idade < 2){
        this.adulto = false;
    }
    if(this.especie === "papagaio" && this.idade < 36){
        this.adulto = false;
    }
    if(this.especie === "calopsita" && this.idade < 18) {
        this.adulto = false;
    }

    if(this.adulto === true) {
        console.log(`Este ${this.especie} chamado ${this.nome} é adulto`)
    } else {
        console.log(`Este ${this.especie} chamado ${this.nome} não é adulto`);
    }
}

// vacinar TODOS
HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
    this.vacinas.push(vacina);
    console.log(`A Vacina ${vacina} foi adicionada ao histórico médico do bichinho`);
}

// consultar TODOS
HistoricoMedico.prototype.consultar = function consultar(data) {
    this.consultas.push(data);
    console.log(`A consulta para o dia ${data} foi agendada com sucesso`);
}

// realizarProcedimento TODOS
HistoricoMedico.prototype.realizarProcedimento = function realizarProcedimento(tipo, motivo) {
    this.procedimentos.push({tipo, motivo});
    console.log(`O procedimento ${tipo} foi adicionado ao histórico médico pelo motivo ${motivo}`);
}

module.exports = { Gatos, Cachorros, AnimaisExoticos }