function Gatos( nome, idade, cor, castrado){ // com letra maiúscula por boa prática par mostrar que é um objeto
    this.nome = nome;
    this.idade = idade + ' meses'; //em meses
    this.cor = cor;
    this.castrado = castrado; // boolean

    this.miar = ()=>{
        return `O gato ${this.nome} mia.`
    }

    this.historico = new HistoricoMedico();
}

function Cachorros( nome, idade, cor, castrado, raca){ 
    this.nome = nome;
    this.idade = idade + ' meses';
    this.cor = cor;
    this.castrado = castrado; 
    this.raca = raca;

    this.latir = function latir(){
        return `O cachorro ${this.nome} late.` //podia ser só o console apenas para imprimir no terminal ou só return para armazenar na memoria
    }

    this.historico = new HistoricoMedico();
}

function AnimaisExoticos( nome, idade, cor, especie){ 
    this.nome = nome;
    this.idade = idade + ' meses';
    this.cor = cor;
    this.especie = especie; 

    this.ehAdulto = function(){
        // poderia usar um while?
        if (this.especie === 'hamster'){
            if (this.idade >= '02 meses') return this.ehAdulto = true;
            return false

        } else if (this.especie === 'papagaio'){
            if (this.idade >= '36 meses') return this.ehAdulto = true;
            return this.ehAdulto = false

        } else if (this.especie === 'calopsita'){
            if (this.idade >= '18 meses') return this.ehAdulto = true;
            return this.ehAdulto = false

        } else{
            return 'Espécie não registrada. Converse com a veterinária resonsável.'
        }
    };
    
    this.historico = new HistoricoMedico();

}

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];

    this.vacinar = function(vacina){
        this.vacinas.push(vacina);
    };
    
    this.consultar = (dataConsulta) => {
        this.consultas.unshift(dataConsulta) // unshift vai adicionar os elementos na primeira posição , o push coloca na última
    };

    this.realizarProcedimento = (tipo, motivo)=>{
        const procedimento = { tipo: tipo, motivo: motivo}
        this.procedimentos.push(procedimento)
    };
}

module.exports = { Gatos, Cachorros, AnimaisExoticos, HistoricoMedico}
