
const { Gato, Cachorro, AnimalExotico } = require('./resolucao');

// animais exoticos
const hamster = new AnimalExotico("Iogurte", 19, "branco e laranja", "hamster");
hamster.ehAdulto(); 
console.log(hamster);
hamster.historico.vacinar('raiva');
hamster.historico.consultar('9/7/2023');
hamster.historico.consultar('13/1/2023');
hamster.historico.consultar('20/7/2022');
hamster.historico.realizarProcedimento('ultrassom', 'dores');
console.log(hamster.historico);



//gato
const gato = new Gato("Pipoca", 18, "branco", true);
gato.miar();
console.log(gato);
gato.historico.vacinar('raiva');
gato.historico.consultar('9/7/2023');
gato.historico.consultar('13/1/2023');
gato.historico.consultar('20/7/2022');
gato.historico.realizarProcedimento('ultrassom', 'dores');
console.log(gato.historico);


//cachorro
const cachorro = new Cachorro("Aslam", 42, "preto", false, 'srd');
cachorro.latir();
console.log(cachorro);
cachorro.historico.vacinar('raiva');
cachorro.historico.consultar('9/7/2023');
cachorro.historico.consultar('13/1/2023');
cachorro.historico.consultar('20/7/2022');
cachorro.historico.realizarProcedimento('ultrassom', 'dores');
console.log(cachorro.historico);







