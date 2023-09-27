const { Cats, Dogs, ExoticAnimals, MedicalHistory } = require('./resolucao')

// Validações dos gatos

gato = new Cats("gato", 18, "branco", true)
gato.historic.consult({ Nome: "Consulta 1", Data: "20/07/2022" })
gato.historic.consult({ Nome: "Consulta 2", Data: "09/07/2024" })
gato.historic.consult({ Nome: "Consulta 3", Data: "13/01/2023" })
gato.historic.consult({ Nome: "Consulta 4", Data: "09/07/2023" })
gato.historic.vaccinate({ Nome: "Antirrábica" })
gato.historic.vaccinate({ Nome: "V8" })
gato.historic.procedure({ Tipo: "ultrassom", Motivo: "dores" })
gato.historic.procedure({ Tipo: "ultrassommm", Motivo: "dores" })
gato.meow()

console.log(gato)
console.log(gato.historic)

// Validações de cachorros

cachorro = new Dogs("Aslam", 42, "preto", false, "srd")
cachorro.historic.consult({ Nome: "Consulta 1", Data: "20/07/2022" })
cachorro.historic.consult({ Nome: "Consulta 2", Data: "09/07/2024" })
cachorro.historic.consult({ Nome: "Consulta 3", Data: "13/01/2023" })
cachorro.historic.consult({ Nome: "Consulta 4", Data: "09/07/2023" })
cachorro.historic.vaccinate({ Nome: "Antirrábica" })
cachorro.historic.vaccinate({ Nome: "V8" })
cachorro.historic.procedure({ Tipo: "ultrassom", Motivo: "dores" })
cachorro.historic.procedure({ Tipo: "ultrassommm", Motivo: "dores" })
cachorro.bark()

console.log(cachorro)
console.log(cachorro.historic)

// Validações dos animais exóticos

exoticAnimal_1 = new ExoticAnimals("Iogurte", 1, "branco e laranja", "hamster")
exoticAnimal_1.historic.consult({ Nome: "Consulta 1", Data: "20/07/2022" })
exoticAnimal_1.historic.consult({ Nome: "Consulta 2", Data: "09/07/2024" })

exoticAnimal_2 = new ExoticAnimals("Bicudo", 40, "verde e amarelo", "papagaio")

exoticAnimal_2.historic.consult({ Nome: "Consulta 3", Data: "13/01/2023" })
exoticAnimal_2.historic.consult({ Nome: "Consulta 4", Data: "09/07/2023" })
exoticAnimal_2.historic.vaccinate({ Nome: "V8" })

exoticAnimal_3 = new ExoticAnimals("Caloo", 19, "Branco e Azul", "calopsita")

exoticAnimal_3.historic.procedure({ Tipo: "ultrassom", Motivo: "dores" })

exoticAnimal_1.ehAdulto()
exoticAnimal_2.ehAdulto()
exoticAnimal_3.ehAdulto()

console.log(exoticAnimal_1)
console.log(exoticAnimal_1.historic)

console.log(exoticAnimal_2)
console.log(exoticAnimal_2.historic)

console.log(exoticAnimal_3)
console.log(exoticAnimal_3.historic)
