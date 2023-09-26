// Você foi escalada para criar o sistema para uma clínica veterinária. 
// Para isso, precisará criar funções construtoras no modelo Pseudoclassical Instantiation 
// para quatro tipos e objeto diferentes:

//  Gatos
//  Cachorros
//  Animais exóticos
//  Histórico médico
// Exemplo de Gato
// {
//     nome: "Pipoca",
//     idade: 18, //em meses
//     cor: "branco",
//     castrado: true,
//     historico: HistoricoMedico
// }
// Exemplo de Cachorro
// {
//     nome: "Aslam",
//     idade: 42, //em meses
//     cor: "preto",
//     castrado: false,
//     raça: "srd",
//     historico: HistoricoMedico
// }
// Exemplo de AnimalExotico
// {
//     nome: "Iogurte",
//     idade: 19, //em meses
//     cor: "branco e laranja",
//     especie: "hamster",
//     adulto: true,
//     historico: HistoricoMedico
// }
// Exemplo de HistoricoMedico
// {
//     consultas: [9/7/2023, 13/1/2023, 20/7/2022],
//     vacinas: ["raiva", "v8", "v10"],
//     procedimentos: [{ tipo: "ultrassom", motivo: "dores"}]
// }

// Além disso, será necessário criar alguns métodos:

//  Todos os tipos de animais precisam de um método vacinar(), que receba uma nova vacina e adicione no histórico do bichinho.
//  Todos os animais precisam de um método consultar(), que adicione uma nova consulta ao histórico.
// As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.
//  Gatos precisam do método miar() e cachorros precisam do método latir();
//  AnimalExotico precisam de um método ehAdulto que retorne true caso o 
// animal já seja um adulto para a espécie dele e false caso contrário. 
// Sua implementação pode cobrir apenas as seguintes espécies:
// Hamster: adulto aos 2 meses
// Papagaio: adulto aos 3 anos
// Calopsita: adulto aos 18 meses


function AnimalExotico(nome, idade, cor, especie, ehAdulto){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
    // this.ehAdulto = ehAdulto;
    
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


// Hamster: adulto aos 2 meses
// Papagaio: adulto aos 3 anos
// Calopsita: adulto aos 18 meses


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


function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

//Todos os tipos de animais precisam de um método vacinar(), que receba uma nova vacina e adicione no histórico do bichinho.
//  Todos os animais precisam de um método consultar(), que adicione uma nova consulta ao histórico. 
// As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.

HistoricoMedico.prototype.vacinar = function(vacina){
    this.vacinas.push(vacina)
    console.log(`A ${this.vacinas} foi aplicada`)
}

HistoricoMedico.prototype.consultar = function(consulta){
    this.consultas.push(consulta).sort
    console.log(`A consulta foi realizada em ${this.consultas}`)
}

HistoricoMedico.prototype.procedimentoRealizado = function(procedimento){
    this.procedimentos.push(procedimento)
    console.log(`O procedimento ${this.procedimentos} foi realizado`)
}

const gato = new Gato("Elvis", 28, "mesclado", true);
const cachorro = new Cachorro("Theo", 60, "preto e caramelo", false, "yorkshire");
const animalExotico = new AnimalExotico("Pepe", 13, "amarelo", "calopsita");
const animalExotico2 = new AnimalExotico("Pipa", 3, "branco", "Hamster");
const animalExotico3 = new AnimalExotico("Bart", 23, "verde", "papagaio");

gato.historico.consultar("09/03/2023");
gato.historico.vacinar("V8");
gato.historico.consultar("04/23/2023");
gato.historico.vacinar("V10");


cachorro.historico.consultar("09/12/2023");
cachorro.historico.vacinar("V10");

gato.miar()
animalExotico3.ehAdulto()
animalExotico.historico.consultar("09/21/2023");
animalExotico.historico.procedimentoRealizado("Ultrassom");

console.log(gato);
console.log(cachorro);
console.log(animalExotico);
console.log(animalExotico2);
console.log(animalExotico3);
