//arquivo para testar as funções

const {
  Gato,
  Cachorro,
  AnimalExotico,
  HistoricoMedico,
} = require("./resolucao");

const zion = new Gato("Zion", 5, "amarelo e branco", true);
zion.historico.vacinar("raiva");
zion.historico.vacinar("V4");
zion.historico.consultar("25/09/2023");
zion.historico.consultar("30/09/2023");
zion.historico.realizarProcedimento("ultrasson", "dores");
zion.miar();
console.log(zion);
console.log(zion.historico);

const cleo = new Cachorro("Cléo", 3, "branco e preto", false, "Buldog Francês");
cleo.historico.vacinar("raiva");
cleo.historico.consultar("02/04/2023");
cleo.historico.realizarProcedimento("exame de sangue", "febre");
cleo.latir();
console.log(cleo);
console.log(cleo.historico);

const ze = new AnimalExotico("Zé", 38, "verde e amarelo", "Papagaio");
ze.historico.consultar("25/09/23");
console.log(ze);
