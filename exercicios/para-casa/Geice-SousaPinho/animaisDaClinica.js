const {Gatos, Cachorros, AnimaisExoticos, HistoricoMedico} = require('./clinicaVeterinaria')


const gato1 = new Gatos('bruno', 15, 'preto e caramelo', false);
gato1.miar();
gato1.historico.realizarProcedimento('cirurgia', 'cisto');
gato1.historico.realizarProcedimento('raio-x', 'pata quebrada');
gato1.historico.realizarProcedimento('tranfusão de sangue', 'anemia');
gato1.historico.consultar('13/10/2022');
gato1.historico.consultar('11/12/2022');
gato1.historico.consultar('12/06/2023');
gato1.historico.consultar('15/10/2023');
gato1.historico.vacinar('V3');
gato1.historico.vacinar('FeLV');
gato1.historico.vacinar('V4');
gato1.historico.vacinar('Antirrábica');
gato1.historico.vacinar('V5');
// console.log(gato1)

const cachorro1 = new Cachorros('disney', 30, 'preto', true, 'srd');
cachorro1.latir();
cachorro1.historico.realizarProcedimento('raio-x', 'pata quebrada');
cachorro1.historico.realizarProcedimento('tranfusão de sangue', 'anemia');
cachorro1.historico.consultar('12/06/2023');
cachorro1.historico.consultar('13/10/2023');
cachorro1.historico.consultar('11/12/2023');
cachorro1.historico.vacinar('Antirrábica');
cachorro1.historico.vacinar('Parainfluenza Canina');
cachorro1.historico.vacinar('Leptospirose Canina');
cachorro1.historico.vacinar('V3');
cachorro1.historico.vacinar('V8');
// console.log(cachorro1)

const calopsita1 = new AnimaisExoticos('psi', 38, 'verde e branca', 'calopsita')
calopsita1.ehAdulto();
calopsita1.historico.realizarProcedimento('raio-x', 'pata quebrada');
calopsita1.historico.realizarProcedimento('tranfusão de sangue', 'anemia');
// calopsita1.historico.vacinar('Paramixovírus');
// calopsita1.historico.consultar('13/10/2022');
// calopsita1.historico.consultar('11/12/2022');
// calopsita1.historico.consultar('12/06/2023');
// console.log(calopsita1)

const hamster1 = new AnimaisExoticos('hamtaro', 12, 'caramelo e branco', 'hamster');
hamster1.ehAdulto();
hamster1.historico.consultar('29/09/2023');
hamster1.historico.realizarProcedimento('exame de sangue', 'avaliação de rotina');
// console.log(hamster1.historico);
console.log(hamster1);

const papagaio = new AnimaisExoticos('papagaio', 36, 'verde ', 'papagaio');
papagaio.ehAdulto();

console.log(papagaio.ehAdulto);
console.log(calopsita1.ehAdulto);
console.log(hamster1.ehAdulto);
