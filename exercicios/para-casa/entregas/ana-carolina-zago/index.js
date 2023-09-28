const { Gatos, Cachorros, AnimaisExoticos, HistoricoMedico } = require('./resolucao');

const gato1 = new Gatos("Pipoca", 18, "branco", true);
console.log(gato1);
gato1.miar();
gato1.historico.vacinar("V3");
gato1.historico.consultar("29-09-2023");
gato1.historico.realizarProcedimento("intubação orotraqueal", "desobstrução das vias aéreas");
console.log(gato1.historico);

const cachorro1 = new Cachorros("Aslam", 42, "preto", false, "srd");
console.log(cachorro1);
cachorro1.latir();
cachorro1.historico.vacinar("Antirrábica");
cachorro1.historico.consultar("01-10-2023");
cachorro1.historico.realizarProcedimento("limpeza dos ouvidos", "dor");
console.log(cachorro1.historico);

const hamster = new AnimaisExoticos("Iogurte", 19, "branco e laranja", "hamster", true);
console.log(hamster);
hamster.ehAdulto();
hamster.historico.vacinar("V3");
hamster.historico.consultar("10-10-2023");
hamster.historico.realizarProcedimento("intubação coleta de sangue", "desnutrição");
console.log(hamster.historico);

const papagaio = new AnimaisExoticos("Loro", 5, "verde", "papagaio", false);
console.log(papagaio);
papagaio.ehAdulto();
papagaio.historico.vacinar("Poliomavírus");
papagaio.historico.consultar("18-11-2023");
papagaio.historico.realizarProcedimento("coleta de sangue", "desobstrução descamação de tecidos córneos, como o bico e as unhas");
console.log(papagaio.historico);

const calopsita = new AnimaisExoticos("Loli", 20, "azul e branca", "calopsita", true);
console.log(calopsita);
calopsita.ehAdulto();
calopsita.historico.vacinar("V3");
calopsita.historico.consultar("09-12-2023");
calopsita.historico.realizarProcedimento("intubação orotraqueal", "dificuldade de respirar");
console.log(calopsita.historico);