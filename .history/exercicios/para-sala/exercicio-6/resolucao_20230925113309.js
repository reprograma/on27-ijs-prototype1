// Defina uma função construtora Prototypal para um objeto `Account`.

// A conta deve ser instanciada com:
// Seu número
// Número da agência
// Um montante inicial que deve ser diferente de zero

// Os métodos de `Account` são:
// `credit(amount)`, que adiciona o valor especificado ao montante. Imprime na console o resultado.
// `debit(amount)`, que subtrai o valor especificado do montante
// `transferTo(anotherAccount, amount)`, que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.

function Account(numero, agencia, montante){
    let account = Object.create(Account.prototype);
    account.numero = numero,
    account.agencia = agencia
    account.
    return account;
}