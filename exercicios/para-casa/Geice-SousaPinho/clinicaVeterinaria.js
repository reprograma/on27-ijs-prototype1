function Gatos( nome, idade, cor, castrado){ // com letra maiúscula por boa prática par mostrar que é um objeto
    this.nome = nome;
    this.idade = idade + ' meses'; //em meses
    this.cor = cor;
    this.castrado = castrado; // boolean
    this.historico = HistoricoMedico;

    this.miar = ()=>{
        return `O gato ${this.nome} mia.`
    }
}

function Cachorros( nome, idade, cor, castrado, raca){ 
    this.nome = nome;
    this.idade = idade + ' meses';
    this.cor = cor;
    this.castrado = castrado; 
    this.raca = raca;
    this.historico = HistoricoMedico;

    this.latir = function latir(){
        return console.log(`O cachorro ${this.nome} late.`) //podia ser só o console apenas para imprimir no terminal ou só return para armazenar na memoria
    }
}

function AnimaisExoticos( nome, idade, cor, especie){ 
    this.nome = nome;
    this.idade = idade + ' meses';
    this.cor = cor;
    this.especie = especie; 

    this.ehAdulto = function(){
        // poderia usar um while?
        if (this.especie === 'hamster'){
            if (this.idade >= '2 meses') return this.ehAdulto = true;
            return this.ehAdulto = false
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

    this.historico = HistoricoMedico;
}

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];

    this.vacinar = function(vacina){
        this.vacinas.push(vacina);
    };
    
    this.consultar() = (dataConsulta) => {
        this.consultas.push(dataConsulta)
        // unshift()  ver o uso e outras possibilidades
    };

    this.realizarProcedimento = (tipo, motivo)=>{
        const procedimento = { tipo: tipo, motivo: motivo}
        this.procedimentos.push(procedimento)
    };
}

const gato1 = new Gatos('bruno', 15, 'preto e caramelo', false);
const cachorro1 = new Cachorros('disney', 30, 'preto', true, 'srd');
const calopsita1 = new AnimaisExoticos('psi', 52, 'verde e branca', 'hamster')
console.log(gato1.miar())
console.log(gato1)
console.log(cachorro1.latir())
console.log(cachorro1)
console.log(calopsita1.ehAdulto())
console.log(calopsita1)


// criar alguns métodos:

//  Todos os tipos de animais precisam de um método vacinar(), que receba uma nova vacina e adicione no histórico do bichinho.
//  Todos os animais precisam de um método consultar(), que adicione uma nova consulta ao histórico. As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.
//  Todos os animais precisam de um método realizarProcedimento(), que adicione um novo procedimento ao histórico. Cada procedimento é um objeto com tipo e motivo.
//  AnimalExotico precisam de um método ehAdulto que retorne true caso o animal já seja um adulto para a espécie dele e false caso contrário. Sua implementação pode cobrir apenas as seguintes espécies:
// Hamster: adulto aos 2 meses
// Papagaio: adulto aos 3 anos
// Calopsita: adulto aos 18 meses