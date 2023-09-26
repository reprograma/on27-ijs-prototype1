const { Gato, Cachorro, AnimalExotico } = require('./resolucao');

pipoca = new Gato("Pipoca", 18, "branco", true);
pipoca.historico.consultar("25/09/2023");
pipoca.historico.vacinar("raiva");
pipoca.historico.realizarProcedimento({ tipo: "ultrassom", motivo: "dores" });
pipoca.miar();

aslam = new Cachorro("Aslam", 42, "preto", false, "srd");
aslam.historico.consultar("10/05/2022");
aslam.historico.consultar("24/09/2023");
aslam.historico.vacinar("v8");
aslam.historico.vacinar("v10")
aslam.historico.realizarProcedimento({ tipo: "raio-x", motivo: "fratura" });
aslam.latir();

iogurte = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster", true);
iogurte.historico.vacinar("v8");
iogurte.historico.realizarProcedimento({ tipo: "ultrassom", motivo: "dores" });
console.log(iogurte.ehAdulto());