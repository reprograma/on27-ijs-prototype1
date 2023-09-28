const { Gatos, Cachorros } = require('./resolucao');

const gato1 = new Gatos("Pipoca", 18, "branco", true);
console.log(gato1);
gato1.miar();

const cachorro1 = new Cachorros("Aslam", 42, "preto", false, "srd");
console.log(cachorro1);
cachorro1.latir();