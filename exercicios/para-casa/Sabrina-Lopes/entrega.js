//Gatos

function Gato(nome, idade, cor, castrado){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico()

}

Gato.prototype.miar = function(){
    console.log(`0 gato ${this.nome} está miando`)
}
//cachorros

function Cachorro(nome, idade, cor, castrado, raca){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico();
}

Cachorro.prototype.latir = function(){
    console.log(`O cachorro ${this.nome} está latindo`)
}

//Animais Exóticos


function AnimalExotico(nome, idade, cor, especie){
    this.nome = nome;
    this.idade = idade;
    this.cor =  cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
    
}

    AnimalExotico.prototype.ehAdulto = function(){
        if(this.especie === 'hamster' && this.idade >=2){
            return true;
        } else if(this.especie ==='papagaio' && this.idade >=36){
            return true;
        }else if (this.especie === 'calopsita' && this.idade >=18){
            return true;
        }else{
            return false;
        }
    }

//Histórico Médico

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

HistoricoMedico.prototype.registrarConsulta = function(data){
    this.consultas.push(data);
    console.log(`Consulta registrada em ${data}`);
}

HistoricoMedico.prototype.aplicarVacina = function(vacina){
    this.vacinas.push(vacina);
    console.log(`Vacina ${vacina} aplicada`);
}

HistoricoMedico.prototype.registrarProcedimento = function(procedimento){
    this.procedimentos.push(procedimento);
    console.log(`Procedimento ${procedimento} registrado`);
}

HistoricoMedico.prototype.realizarProcedimento = function (tipo, motivo) {
  const procedimento = { tipo, motivo };
  this.procedimentos.push(procedimento);
  console.log(`Procedimento ${tipo} (${motivo}) registrado`);
};
// Exemplo de uso:
const gato = new Gato("Pipoca", 18, "branco", true);
const cachorro = new Cachorro("Aslam", 42, "preto", false, "srd");
const animalExotico = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster");

gato.historico.registrarConsulta("09/23/2023");
gato.historico.aplicarVacina("V8");
gato.historico.realizarProcedimento("Ultrassom", "Exame de rotina");

cachorro.historico.registrarConsulta("09/22/2023");
cachorro.historico.aplicarVacina("V10");
cachorro.historico.realizarProcedimento("Radiografia", "Avaliação ortopédica");

animalExotico.historico.registrarConsulta("09/21/2023");s
animalExotico.historico.registrarProcedimento("Ultrassom");
animalExotico.historico.realizarProcedimento("Check-up", "Exame geral");

console.log("Procedimentos realizados para " + gato.nome + ":");
gato.historico.procedimentos.forEach((procedimento, index) => {
  console.log(`Procedimento ${index + 1}: ${procedimento.tipo} (${procedimento.motivo})`);
}); 

console.log("Procedimentos realizados para " + cachorro.nome + ":");
cachorro.historico.procedimentos.forEach((procedimento, index) => {
  console.log(`Procedimento ${index + 1}: ${procedimento.tipo} (${procedimento.motivo})`);
});

console.log("Procedimentos realizados para " + animalExotico.nome + ":");
animalExotico.historico.procedimentos.forEach((procedimento, index) => {
  console.log(`Procedimento ${index + 1}: ${procedimento.tipo} (${procedimento.motivo})`);
});

console.log(gato);
console.log(cachorro);
console.log(animalExotico);