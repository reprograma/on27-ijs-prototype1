// Gatos
function Cats(name, age, color, castrated) {
    this.name = name
    this.age = age
    this.color = color
    this.castrated = castrated
    this.historic = new MedicalHistory()
}
// Miado dos gatos
Cats.prototype.meow = function meow() {
    console.log("Miaaaauuu")
}

// Cães
function Dogs(name, age, color, castrated, breed) {
    this.name = name
    this.age = age
    this.color = color
    this.castrated = castrated
    this.breed = breed
    this.historic = new MedicalHistory()
}
// Latido dos cães
Dogs.prototype.bark = function bark() {
    console.log("Au, Au, Au! ")
}

// Animais exóticos
function ExoticAnimals(name, age, color, specie) {
    this.name = name
    this.age = age
    this.color = color
    this.specie = specie
    this.adult = false
    this.historic = new MedicalHistory()
}
// Verificação da idade dos animais exóticos
ExoticAnimals.prototype.ehAdulto = function ehAdulto() {
    let adulthood
    switch (this.specie) {
        case 'hamster':
            adulthood = 2
            break
        case 'papagaio':
            adulthood = 36
            break
        case 'calopsita':
            adulthood = 18
            break
        default: "Animal não cadastrado"
    }

    if (this.age >= adulthood) {
        this.adult = true
        console.log(`O ${this.specie} é um adulto`)
    } else (
        console.log(`O ${this.specie} é uma criança`)
    )

}
// O histórico médico de qualquer um dos animais será feito com as funções e os metodos aqui abaixo:
function MedicalHistory() {
    this.queries = []
    this.vaccines = []
    this.procedures = []
}

MedicalHistory.prototype.consult = function (queries) {
    this.queries.unshift(queries)
}

MedicalHistory.prototype.vaccinate = function (vaccines) {
    this.vaccines.push(vaccines)
}

MedicalHistory.prototype.procedure = function (procedures) {
    this.procedures.push(procedures)
}

module.exports = { Cats, Dogs, ExoticAnimals, MedicalHistory }