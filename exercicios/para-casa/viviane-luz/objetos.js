function Animal(type, name, age, color, castrado){

    this.type = type;
    this.name = name;
    this.age = age;
    this.color = color;
    this.castrado = castrado;

    this.historico = 
        {
            consultas: [],
            vacinas: [],
            procedimentos: []
        }
    

    this.vaccine = function(vacina) {
        this.historico.vacinas.push(vacina);
        
        console.log(`O ${this.type} chamado ${this.name} foi vacinado com ${vacina}`);
    }

    this.expression = function(){
        if(this.type === 'cachorro'){
            console.log(`O ${this.type} chamado ${this.name} está latindo`);

        }else if(this.type === 'gato'){
            console.log(`O ${this.type} chamado ${this.name} está miando`)
        }
    };

    this.consulta = function(){
        if(this.historico.consultas.unshift === 'animal1'){
            console.log(`O ${this.type} ${this.name} a nova consulta é em`)
        }
    }
}

const animal1 = new Animal('cachorro', 'Maguila', 5, 'caramelo', 'castrado', true);
const animal2 = new Animal('gato', 'Flora', 2, 'branca', 'castrado', 'vacinado', true);
const animal3 = new Animal('papagaio', 'Marla', 15, 'verde', 'castrado', 'vacinado', true);
const consulta = new Animal('9/7/2023, 13/1/2023, 20/7/2022');
const vacinas = new Animal();

console.log(animal1, animal2, animal3);
animal1.expression();
animal2.expression();
animal1.vaccine("v8");
animal1.consulta('9/7/2023')

console.log(`Animal exótico é adulto ${animal3.name}`);

console.log(`Histórico de consultas para ${animal1.name}`);
console.log(animal1.historico.consultas);



//Não consegui retornar o historico de consultas  com motivo e as datas:(
