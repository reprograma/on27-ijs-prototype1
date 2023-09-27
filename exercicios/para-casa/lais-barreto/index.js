const {
  Gato,
  Cachorro,
  AnimalExotico,
  HistoricoMedico,
} = require("./resolucao");

const gigi = new Gato("Gigi", 12, "laranja e preto", true);
console.log(gigi);
gigi.miar();
gigi.historico.vacinar("clamidiose");
gigi.historico.consultar("26/09/2023");
gigi.historico.consultar("24/09/2023");
gigi.historico.realizarProcedimento("exames de fezes", "diarreia");
console.log(gigi.historico);

const bohemia = new Cachorro("Bohemia", 36, "pérola", true, "viralata");
console.log(bohemia);
bohemia.latir();
bohemia.historico.vacinar("antirrábica");
bohemia.historico.consultar("25/09/2023");
bohemia.historico.realizarProcedimento("ultrassonografia", "inchaço abdominal");
console.log(bohemia.historico);

const dragon = new AnimalExotico("Dragon", 38, "verde", "Papagaio", true);
console.log(dragon);
console.log(dragon.ehAdulto());
dragon.historico.vacinar("varíola aviária");
dragon.historico.consultar("26/09/2023");
dragon.historico.realizarProcedimento("exame de sangue", "checkup");

const ratin = new AnimalExotico("Ratin", 1, "branco", "Hamster", false);
console.log(ratin);
console.log(ratin.ehAdulto());
