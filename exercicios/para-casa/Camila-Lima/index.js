const { Gato, Cachorro, AnimalExotico } = require('./resolucao');


//Validando Animal Exotico
const animalExotico = new AnimalExotico("Pepe", 13, "amarelo", "calopsita");
const animalExotico2 = new AnimalExotico("Pipa", 3, "branco", "Hamster");
animalExotico.ehAdulto()
animalExotico2.ehAdulto()
animalExotico.historico.consultar("09/21/2023");
animalExotico.historico.realizarProcedimento("ultrassom", "dor");
animalExotico.historico.vacinar("V8");
console.log(animalExotico)
console.log(animalExotico2)

//Validando Gato
const gato = new Gato("Elvis", 28, "mesclado", true);
gato.historico.consultar("04/23/2023");
gato.historico.consultar("09/03/2023");
gato.historico.vacinar("V8");
gato.historico.vacinar("V10");
gato.historico.realizarProcedimento("ultrassom", "tumor");
console.log(gato);

//Validando Cachorro
const cachorro = new Cachorro("Theo", 60, "preto e caramelo", false, "yorkshire");
cachorro.latir()
cachorro.historico.consultar("04/13/2023");
cachorro.historico.vacinar("V10");
cachorro.historico.realizarProcedimento("hemograma", "check-up");
console.log(cachorro)
