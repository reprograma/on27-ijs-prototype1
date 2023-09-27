const { AnimalExotico, Cachorro, Gato } = require('./desafio');

const gato = new Gato("Pedrita", 18, "preta", true);
gato.miar();
gato.historico.vacinar("gripe");
gato.historico.consultar("30/9/2023");
gato.historico.realizarProcedimento("ultrassom", "fratura");

const cachorro = new Cachorro("Osho", 42, "marrom", false, "vira-lata caramelo");
cachorro.latir();
cachorro.historico.vacinar("cinomose");
cachorro.historico.consultar("15/9/2023");
cachorro.historico.realizarProcedimento("raio-x", "fratura");

const animal = new AnimalExotico("Shein", 1, "rosa", "hamster");
console.log(`Shein é adulto? ${animal.ehAdulto()}`);

















