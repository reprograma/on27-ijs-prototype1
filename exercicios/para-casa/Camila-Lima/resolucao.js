//AnimalExotico
function AnimalExotico(nome, idade, cor, especie){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
}

AnimalExotico.prototype.ehAdulto = function(){
    if(
        this.especie === "Hamster" && this.idade >= 2 || 
        this.especie === "Papagaio" && this.idade >= 36 ||
        this.especie === "Calopsita" && this.idade >= 18
    ){
        console.log(`O ${this.especie} é adulto`)
        return true
    }else{
        console.log(`O ${this.especie} não é adulto`)
        return false
    }
} 

//Gato
function Gato(nome, idade, cor, castrado){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
}

Gato.prototype.miar = function(){
    console.log(`O gato ${this.nome} esta miando loucamente`)
} 

//Cachorro
function Cachorro(nome, idade, cor, castrado, raca){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico();
}

Cachorro.prototype.latir = function(){
    console.log(`O cachorro ${this.nome} esta latindo e pulando`)
} 

//Historico Medico
function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

HistoricoMedico.prototype.vacinar = function(vacina){
    this.vacinas.push(vacina)
    console.log(`A ${this.vacinas} foi aplicada`)
}

HistoricoMedico.prototype.consultar = function(consulta){
    this.consultas.unshift(consulta)
    console.log(`A consulta foi realizada em ${this.consultas}`)
}

HistoricoMedico.prototype.realizarProcedimento = function(tipo, motivo){

    let procedimento = new ProcedimentoRealizado(tipo, motivo)

    this.procedimentos.push(procedimento)
    console.log(`O procedimento ${tipo} foi realizado por motivo ${motivo} `)
}

function ProcedimentoRealizado(tipo, motivo ){
    this.tipo = tipo;
    this.motivo= motivo;
}

module.exports = { Gato, Cachorro, AnimalExotico };

