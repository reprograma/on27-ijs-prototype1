const { Gato } = require('./Gato');
const { Cachorro } = require('./Cachorro');
const { AnimalExotico } = require('./AnimalExotico');

const gato = new Gato("Tutu", 24, "branco", true);
console.log(gato);
gato.miar();
gato.vacinar("Raiva");
gato.consultar('2023-09-27');
gato.consultar('2022-09-27');
gato.realizarProcedimento("Exame de sangue", "Rotina");

const cachorro = new Cachorro("Julio", 42, "Preto", false, "SRD");
console.log(cachorro);
cachorro.latir();
cachorro.vacinar("Raiva");
cachorro.consultar('2023-09-27');
cachorro.consultar('2022-09-27');
cachorro.realizarProcedimento("Exame de urina", "Rotina");

const calopsita = new AnimalExotico("Roberto", 2, "Amarelo e branco", "Calopsita");
console.log(calopsita);
calopsita.vacinar();
calopsita.consultar('2022-09-27');
calopsita.realizarProcedimento("Exame físico", "Asa machucada")
calopsita.ehAdulto(2)

const hamster = new AnimalExotico("Bolinha", 12, "Marrom e branco", "Hamster");
console.log(hamster);
hamster.vacinar();
hamster.consultar('2021-09-27');
hamster.realizarProcedimento("Exame de fezes", "Alimentação inadequada (engoliu uma pedra)");
hamster.ehAdulto(12)

const papagaio = new AnimalExotico("Loro José", 34, "Verde e amarelo", "Papagaio");
console.log(papagaio)
papagaio.vacinar();
papagaio.consultar('2022-09-27');
papagaio.realizarProcedimento("Fonoaudiologia", "Está falando pouco");
papagaio.ehAdulto(34)