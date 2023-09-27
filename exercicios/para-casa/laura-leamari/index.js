const { Gato, Cachorro, AnimalExotico } = require('./resolucao');

pipoca = new Gato("Pipoca", 18, "branco", true);
pipoca.historico.vacinar("raiva");
pipoca.historico.consultar("25/09/2023");
pipoca.historico.realizarProcedimento("ultrassom", "dores");
pipoca.miar();
console.log('Dados Gato', pipoca)
console.log('Gato pipoca', pipoca.historico)

aslam = new Cachorro("Aslam", 42, "preto", false, "srd");
aslam.historico.vacinar("v8");
aslam.historico.vacinar("v10")
aslam.historico.consultar("10/05/2022");
aslam.historico.consultar("24/09/2023");
aslam.historico.realizarProcedimento("raio-x", "fratura");
aslam.latir();
console.log('Dados do Cachorro', aslam)
console.log('Cachorro Aslam', aslam.historico)

iogurte = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster", true);
iogurte.historico.vacinar("v8");
iogurte.historico.realizarProcedimento("ultrassom", "dores");
console.log(iogurte.ehAdulto());
console.log('Dados do Hamster', iogurte)
console.log('Hamster iogurte', iogurte.historico)