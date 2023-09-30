function Gato(nome, idade, cor, castrado){
    this.nome = nome;
    this.idade =idade;
    this.cor = cor
    this.castrado = castrado;
    this.historico = new HistoricoMedico;
}

function Cachorro(nome, idade, cor, castrado, raca){
    this.nome = nome;
    this.idade =idade;
    this.cor = cor
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico;
}

function AnimalExotico(nome, idade, cor, especie){
    this.nome = nome;
    this.idade =idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = this.ehAdulto();
    this.historico = new HistoricoMedico;
}

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

HistoricoMedico.prototype.vacinar = function vacinar(vacina){
    this.vacinas.push(vacina);
}

HistoricoMedico.prototype.consultar = function consultar(dataDeConsulta){
    this.consultas.unshift(dataDeConsulta);
}

HistoricoMedico.prototype.realizarProcedimento = function realizarProcedimento(tipo, motivo){
    procedimento = {
        tipo: tipo,
        motivo: motivo,
    }
    this.procedimentos.push(procedimento);
}

Gato.prototype.miar = function miar(){
    console.log(`${this.nome} miou!`);
}

Cachorro.prototype.latir = function latir(){
    console.log(`${this.nome} latiu!`)
}

AnimalExotico.prototype.ehAdulto = function ehAdulto(){
    if(this.especie !== ("Hamster" || "Papagaio" || "Calopsita"))
        return undefined;
    else {
        if(this.especie === "Hamster" && this.idade >= 2) return true;
        if(this.especie === "Papagaio" && this.idade >= 36) return true;
        if(this.especie === "Calopsita"  && this.idade >= 18) return true;
        else return false;
        }
    }

module.exports = {Gato, Cachorro, AnimalExotico, HistoricoMedico}
