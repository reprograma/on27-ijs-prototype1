

function Cat(name, age, color, castrated, medicalHistory){
    this.name = name,
    this.age = age,
    this.color = color,
    this.castrated = castrated,
    this.medicalHistory = medicalHistory
}

function Dog(name, age, color, castrated, race, medicalHistory)
{
    this.name = name,
    this.age = age,
    this.color = color,
    this.castrated = castrated,
    this.race = race,
    this.medicalHistory = medicalHistory
}

function ExoticAnimal(name, age, color, species, adult, medicalHistory){
    this.name = name,
    this.age = age,
    this.color = color,
    this.species = species,
    this.adult = adult,
    this.medicalHistory = medicalHistory
}

function medicalHistory(){
    this.medicalAppointment = []
    this.vaccines = []
    this.procedures = []
    
}



Cat.prototype.miar = function miar(){
    console.log(`O gato ${this.name} está miando!`)
}

Dog.prototype.latir = function latir(){
    console.log(`O cachorro ${this.name} está latindo!`)
}

ExoticAnimal.prototype.ehAdult = function ehAdult(){
    if (this.species === "hamster"){
        this.age <= 2
         ehAdult === false
        console.log(`O animal ${this.name}, não é adulto.`)
    } else{
        ehAdult === true
       console.log(`O animal ${this.name} é adulto`)
       
    }   
    if(this.species === "papagaio"){
        this.age <= 36
        ehAdult === false
        console.log(`O animal ${this.name}, não é adulto.`)
    } else {
        ehAdult === true
        console.log(`O animal ${this.name} é adulto`)
    }

    if(this.species === "calopcita"){
        this.age <= 18
        ehAdult === false
        console.log(`O animal ${this.name}, não é adulto.`)
    } else {
        ehAdult === true
        console.log(`O animal ${this.name} é adulto`)
    }
}


medicalHistory.prototype.addVaccine = function addVaccine(vaccine){
    this.vaccines.push(vaccine)
}


medicalHistory.prototype.medicalAppointment =  function(appointment){
        this.medicalAppointment.push(appointment)
    }

medicalHistory.prototype.procedures = function(type, reason){

    let procedure = new procedure(tipo, motivo)

    this.procedures.push(procedure)
    console.log()
}
