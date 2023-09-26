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
const animalExotico = new AnimalExotico("Pepe", 13, "amarelo", "calopsita");
const animalExotico2 = new AnimalExotico("Pipa", 3, "branco", "Hamster");
animalExotico.ehAdulto()
animalExotico2.ehAdulto()

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
const gato = new Gato("Elvis", 28, "mesclado", true);
console.log(gato);

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
const cachorro = new Cachorro("Theo", 60, "preto e caramelo", false, "yorkshire");
cachorro.latir()
console.log(cachorro)

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
    this.consultas.push(consulta).sort
    console.log(`A consulta foi realizada em ${this.consultas}`)
}

HistoricoMedico.prototype.realizarProcedimento = function(tipo){
    this.procedimentos.push(tipo)
    console.log(`O procedimento ${this.procedimentos} foi realizado por motivo `)
}

//Procedimento Realizado
function ProcedimentoRealizado(){
    this.tipo = [];
    this.motivo= [];
}

ProcedimentoRealizado.prototype.exame = function(tipoExame){
    this.tipo.push(tipoExame)
    console.log(`O ${this.tipo} foi realizado`)
}

ProcedimentoRealizado.prototype.justificativa = function(motivo){
    this.motivo.push(motivo)
    console.log(`Foi feito o  ${this.tipo} por causa de ${this.motivo} `)
}


animalExotico.historico.consultar("09/21/2023");
animalExotico.historico.realizarProcedimento("ultrassom", "dor");
gato.historico.consultar("09/03/2023");
gato.historico.vacinar("V8");
gato.historico.consultar("04/23/2023");
gato.historico.vacinar("V10");
console.log(gato)
cachorro.historico.consultar("09/12/2023");
cachorro.historico.vacinar("V10");