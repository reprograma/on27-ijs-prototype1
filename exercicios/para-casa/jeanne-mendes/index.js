const {Gato, Cachorro, AnimalExotico, HistoricoMedico} = require('./resolucao')

gato1 = new Gato("Pipoca", 18, "Branco", true)
console.log(gato1)
gato1.historico.vacinar("Raiva")
gato1.historico.vacinar("FIV")
gato1.historico.vacinar("Gripe Felina")
gato1.historico.consultar("20/7/2022")
gato1.historico.consultar("13/1/2023")
gato1.historico.consultar("9/7/2023")
gato1.historico.realizarProcedimento("Medicação","Dor")
gato1.historico.realizarProcedimento("Cirurgia","Nodulo")
console.log(gato1)
console.log(gato1.historico)
gato1.miar()

cachorro1 = new Cachorro("Aslam", 42, "Preto", false, "SRD")
console.log(cachorro1)
cachorro1.latir()

animalExotico1 = new AnimalExotico("Iorgute", 19, "Branco e Laranja", "Hamster")
console.log(animalExotico1)
animalExotico1 = new AnimalExotico("Iorgute", 1, "Branco e Laranja", "Hamster")
console.log(animalExotico1)

animalExotico2 = new AnimalExotico("Tito", 19, "Marrom", "Pato")
console.log(animalExotico2)

