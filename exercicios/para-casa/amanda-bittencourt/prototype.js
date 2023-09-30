// Função construtora para o Histórico Médico
function HistoricoMedicoDoBicho() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
  }
  
  function Gato(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedicoDoBicho();
  }
  
  Gato.prototype.miar = function () {
    console.log(`${this.nome} está fazendo miau miau.`);
  };
  
  function Cachorro(nome, idade, cor, castrado, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = new HistoricoMedicoDoBicho();
  }
  
  Cachorro.prototype.latir = function () {
    console.log(`${this.nome} está fazendo auau.`);
  };
  
  function AnimalExotico(nome, idade, cor, especie, adulto) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;
    this.historico = new HistoricoMedicoDoBicho();
  }
  
  AnimalExotico.prototype.ehAdulto = function () {
    switch (this.especie) {
      case "hamster":
        return this.idade >= 2; // Hamster é adulto aos 2 meses
      case "papagaio":
        return this.idade >= 36; // Papagaio é adulto aos 3 anos (36 meses)
      case "calopsita":
        return this.idade >= 18; // Calopsita é adulto aos 18 meses
      default:
        return false; // Espécie desconhecida
    }
  };
  
  HistoricoMedicoDoBicho.prototype.vacinar = function (novaVacina) {
    this.vacinas.push(novaVacina);
  };
  
  HistoricoMedicoDoBicho.prototype.consultar = function (dataConsulta) {
    this.consultas.unshift(dataConsulta); 
  };
  
  HistoricoMedicoDoBicho.prototype.realizarProcedimento = function (tipo, motivo) {
    this.procedimentos.push({ tipo, motivo });
  };
  
  
  const meuGato = new Gato("Pipoca", 18, "branco", true);
  meuGato.miar();
  meuGato.historico.vacinar("v8");
  meuGato.historico.consultar("09/07/2023");
  meuGato.historico.realizarProcedimento("ultrassom", "dores");
  
  const meuCachorro = new Cachorro("Aslam", 42, "preto", false, "srd");
  meuCachorro.latir();
  meuCachorro.historico.vacinar("v10");
  meuCachorro.historico.consultar("13/01/2023");
  meuCachorro.historico.realizarProcedimento("raio-x", "fratura");
  
  const meuAnimalExotico = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster", true);
  console.log(`É adulto? ${meuAnimalExotico.ehAdulto()}`);
  meuAnimalExotico.historico.vacinar("raiva");
  meuAnimalExotico.historico.consultar("20/07/2022");
  meuAnimalExotico.historico.realizarProcedimento("exame de sangue", "check-up");
  