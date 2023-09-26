// criar funções construtoras no modelo `Pseudoclassical Instantiation` para quatro tipos e objeto diferentes: 
// Animais exóticos
// Histórico médico

function Gatos( nome, idade, cor, castrado, historico){ // com letra maiúscula por boa prática par mostrar que é um objeto
    this.nome = nome,
    this.idade = idade, //em meses
    this.cor = cor,
    this.castrado = castrado, // boolean
    this.historico = historico
}


function Cachorros( nome, idade, cor, castrado, historico){ 
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.castrado = castrado, // boolean
    this.historico = historico
}



// criar alguns métodos:
// `vacinar()`, que receba uma nova vacina e adicione no histórico do bichinho.
// -`consultar()`, que adicione uma nova consulta ao histórico. As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.
// `Gatos` precisam do método `miar()` e cachorros precisam do método `latir()`;
// `AnimalExotico` precisam de um método `ehAdulto` que retorne `true` caso o animal já seja um adulto para a espécie dele e false caso contrário. Sua implementação pode cobrir apenas as seguintes espécies:
// Hamster: adulto aos 2 meses
// Papagaio: adulto aos 3 anos
// Calopsita: adulto aos 18 meses