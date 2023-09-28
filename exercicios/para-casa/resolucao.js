class HistoricoMedico {
    constructor() {
      this.consultas = [];
      this.vacinas = [];
      this.procedimentos = [];
    }
  
    vacinar(novaVacina) {
      this.vacinas.push(novaVacina);
    }
  
    consultar(novaConsulta) {
      this.consultas.unshift(novaConsulta);
    }
  
    realizarProcedimento(tipo, motivo) {
      this.procedimentos.push({ tipo, motivo });
    }
  }
  
  class Animal {
    constructor(nome, idade, cor, castrado) {
      this.nome = nome;
      this.idade = idade;
      this.cor = cor;
      this.castrado = castrado;
      this.historico = new HistoricoMedico();
    }
  }
  
  class Gato extends Animal {
    miar() {
      console.log(`${this.nome} está miando!`);
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade, cor, castrado, raca) {
      super(nome, idade, cor, castrado);
      this.raca = raca;
    }
  
    latir() {
      console.log(`${this.nome} está latindo!`);
    }
  }
  
  class AnimalExotico extends Animal {
    constructor(nome, idade, cor, especie) {
      super(nome, idade, cor, false); // Forçar castrado como falso para AnimalExotico
      this.especie = especie;
      this.adulto = this.ehAdulto();
    }
  
    ehAdulto() {
      if (this.especie === 'hamster' && this.idade >= 2) {
        return true;
      } else if (this.especie === 'papagaio' && this.idade >= 36) {
        return true;
      } else if (this.especie === 'calopsita' && this.idade >= 18) {
        return true;
      }
      return false;
    }
  }
  
  module.exports = { Gato, Cachorro, AnimalExotico };
  