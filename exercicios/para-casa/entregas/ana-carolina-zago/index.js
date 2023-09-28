const { Gatos, Cachorros, AnimaisExoticos } = require('./resolucao');

const gato1 = new Gatos("Pipoca", 18, "branco", true);
console.log(gato1);
gato1.miar();

const cachorro1 = new Cachorros("Aslam", 42, "preto", false, "srd");
console.log(cachorro1);
cachorro1.latir();

const hamster = new AnimaisExoticos("Iogurte", 19, "branco e laranja", "hamster", true);
console.log(hamster);
hamster.ehAdulto();

const papagaio = new AnimaisExoticos("Loro", 5, "verde", "papagaio", false);
console.log(papagaio);
papagaio.ehAdulto();

const calopsita = new AnimaisExoticos("Loli", 20, "azul e branca", "calopsita", true);
console.log(calopsita);
calopsita.ehAdulto();