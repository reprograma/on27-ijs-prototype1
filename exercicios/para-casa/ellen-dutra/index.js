const { Gato, Cachorro, AnimalExotico } = require('./resolucao');

const pipoca = new Gato('Pipoca', 18, 'branco', true);
pipoca.historico.vacinar('raiva');
pipoca.historico.vacinar('v8');
pipoca.historico.consultar('09/28/2023');
pipoca.historico.consultar('09/30/2023');
pipoca.historico.realizarProcedimento('ultrassom', 'dores');
pipoca.historico.realizarProcedimento('exame de sangue', 'anemia');
pipoca.miar();
console.log(`Informações sobre ${pipoca.nome} - idade: ${pipoca.idade} meses, cor: ${pipoca.cor}, castrado: ${pipoca.castrado}`);
console.log('Histórico Médico:');
console.log('Consultas:', pipoca.historico.consultas);
console.log('Vacinas:', pipoca.historico.vacinas);
console.log('Procedimentos:', pipoca.historico.procedimentos);

const aslam = new Cachorro('Aslam', 42, 'preto', false, 'srd');
aslam.historico.vacinar('giárdia');
aslam.historico.vacinar('v10');
aslam.historico.consultar('09/26/2023');
aslam.historico.consultar('09/29/2023');
aslam.historico.realizarProcedimento('exame de urina', 'doença renal');
aslam.historico.realizarProcedimento('exame de sangue', 'infecção');
aslam.latir();
console.log(`Informações sobre ${aslam.nome} - idade: ${aslam.idade} meses, cor: ${aslam.cor}, castrado: ${aslam.castrado}`);
console.log('Histórico Médico:');
console.log('Consultas:', aslam.historico.consultas);
console.log('Vacinas:', aslam.historico.vacinas);
console.log('Procedimentos:', aslam.historico.procedimentos);

const iogurte = new AnimalExotico('Iogurte', 19, 'branco e laranja', 'hamster');
iogurte.historico.consultar('09/25/2023');
iogurte.historico.consultar('09/30/2023');
iogurte.historico.realizarProcedimento('raio x', 'pata quebrada');
console.log(`Informações sobre ${iogurte.nome} - idade: ${iogurte.idade} meses, cor: ${iogurte.cor}, especie: ${iogurte.especie}, adulto: ${iogurte.ehAdulto()}`);
console.log('Histórico Médico:');
console.log('Consultas:', iogurte.historico.consultas);
console.log('Vacinas:', iogurte.historico.vacinas);
console.log('Procedimentos:', iogurte.historico.procedimentos);
