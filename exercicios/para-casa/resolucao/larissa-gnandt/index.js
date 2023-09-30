const {
  Cachorro,
  Gato,
  HistoricoMedico,
  AnimalExotico,
} = require("./pseudoclasses");

const gato = new Gato("Nicolau", 96, "branco", true, new HistoricoMedico());
gato.vacinar("V10");
gato.consultar(new Date(2023, 3, 23));
gato.consultar(new Date(2022, 3, 23));
gato.consultar(new Date(2023, 1, 10));
gato.realizarProcedimento("ultrassom", "dores");
gato.miar();

const cachorro = new Cachorro(
  "Pituco",
  120,
  "preto",
  true,
  "SRD",
  new HistoricoMedico()
);
cachorro.vacinar("Gripe");
cachorro.consultar(new Date(2023, 4, 29));
cachorro.realizarProcedimento("RX", "dores");
cachorro.latir();

const animalExotico = new AnimalExotico(
  "Marty",
  24,
  "listrada",
  "Equus quagga",
  true,
  new HistoricoMedico()
);

const animalExotico2 = new AnimalExotico(
  "Eva",
  84,
  "cinza e amarela",
  "calopsita",
  true,
  new HistoricoMedico()
);

animalExotico.vacinar("Raiva");
console.log(animalExotico.historico.vacinas);
animalExotico.consultar(new Date(2021, 2, 18));
animalExotico.consultar(new Date(2021, 4, 29));
animalExotico.consultar(new Date(2023, 7, 29));
animalExotico.realizarProcedimento("cirurgia", "castrar");
console.log(animalExotico.ehAdulto());

console.log(animalExotico2.ehAdulto());
