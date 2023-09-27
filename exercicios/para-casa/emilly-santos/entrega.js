function Cat(name, age, color, castrated) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.castrated = castrated
    this.historic = new MedicalHistory();
}

Cat.prototype.meow = function() {
    console.log(`O gato ${this.nome} está miando`)
}

function Dog(name, age, color, castrated, race) {
    this.name = name;
    this.agr = age;
    this.color = color;
    this.castrated = castrated;
    this.race = race;
    this.historic = new MedicalHistory();
}

Dog.prototype.bark = function() {
    console.log(`O gato ${this.nome} está latindo`)
}

function ExoticAnimal(name, age, color, species, adult) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.species = species;
    this.adult = adult;
    this.historic = new MedicalHistory();
}

ExoticAnimal.prototype.ehAdulto = function(){
    if(this.species === 'hamster' && this.age >=2){
        return true;
    }else if(this.species ==='papagaio' && this.age >=36){
        return true;
    }else if (this.species === 'calopsita' && this.age >=18){
        return true;
    }else{
        return false;
    }
}

function MedicalHistory() {
    this.queries = [];
    this.vaccines = []; 
    this.procedures = [];
}

MedicalHistory.prototype.consult = function(date){
    this.queries.push(date);
    console.log(`Consulta registrada em ${date}`);
}

MedicalHistory.prototype.vaccinate = function(vaccines){
    this.vaccines.push(vaccines);
    console.log(`Vacina ${vaccines} aplicada`);
}

MedicalHistory.prototype.procedure = function(procedures){
    this.procedures.push(procedures);
    console.log(`Procedimento ${procedures} registrado`);
}

module.exports = { Cat, Dog, ExoticAnimal, MedicalHistory };