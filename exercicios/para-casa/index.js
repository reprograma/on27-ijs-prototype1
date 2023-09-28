const { Gato, Cachorro, AnimalExotico } = require('./resolucao');

const Garfield = new Gato('Garfield', 24, 'laranja', false);
Garfield.miar();
Garfield.historico.vacinar('Cinomose');
Garfield.historico.consultar('05/22/2023');
Garfield.historico.consultar('09/26/2023');
Garfield.historico.realizarProcedimentos('exame de sangue', 'apatia');
console.log(`nome: ${Garfield.nome} - idade: ${Garfield.idade} meses - cor: ${Garfield.cor} - castrado: ${Garfield.castrado}`);
console.log('Histórico Médico:');
console.log('Consultas:', Garfield.historico.consultas);
console.log('Vacinas:', Garfield.historico.vacinas);
console.log('Procedimentos:', Garfield.historico.procedimentos);

const Donnie = new Cachorro('Donnie', 3, 'preto', true, 'pug');
Donnie.latir();
Donnie.historico.vacinar('V10');
Donnie.historico.consultar('06/15/2023');
Donnie.historico.consultar('09/15/2023');
Donnie.historico.realizarProcedimentos('exame de sangue', 'exame de rotina');
console.log(`nome: ${Donnie.nome} - idade: ${Donnie.idade} meses - cor: ${Donnie.cor} - castrado: ${Donnie.castrado}`);
console.log('Histórico Médico:');
console.log('Consultas:', Donnie.historico.consultas);
console.log('Vacinas:', Donnie.historico.vacinas);
console.log('Procedimentos:', Donnie.historico.procedimentos);

const loira = new AnimalExotico('loira', 33, 'verde', 'papagaio');
loira. historico.vacinar('Poliomavírus Aviário');
loira.historico.consultar('02/10/2023');
loira.historico.consultar('08/30/2023');
loira.historico.realizarProcedimentos('raio x', 'asa quebrada');
console.log(`Nome: ${loira.nome} - idade: ${loira.idade} meses - cor: ${loira.cor} - especie: ${loira.especie} - adulto: ${loira.ehAdulto()}`);
console.log('Histórico Médico:');
console.log('Consultas:', loira.historico.consultas);
console.log('Vacinas:', loira.historico.vacinas);
console.log('Procedimentos:', loira.historico.procedimentos);