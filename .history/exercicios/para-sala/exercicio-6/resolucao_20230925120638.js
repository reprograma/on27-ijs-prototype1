// Os métodos de `Account` são:
// `credit(amount)`, que adiciona o valor especificado ao montante. Imprime na console o resultado.
// `debit(amount)`, que subtrai o valor especificado do montante
// `transferTo(anotherAccount, amount)`, que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.

function Account(numero, agencia, montante){
    // let account = Object.create(Account.prototype);

    this.numero = numero;
    this.agencia = agencia;
    this.montante = montante; // !== 0

    // return account;
}

Account.prototype.credit = (amount)=>{
    this.montante += amount;
    console.log(`Seu crédito é de R$${this.montante}`)
}

Account.prototype.debit = (amount)=>{
    this.montante -= amount;
    console.log(`Seu crédito é de R$${this.montante}`)
}

Account.prototype.transferTo= (anotherAccount, amount)=>{
    if (amount > this.montante){
        throw new Error('Saldo insuficiente para realizar a operação')
    } else{
        let transfer = anotherAccount + amount
        console.log(`Transferência de R$${amount} realizada com sucesso`)
        return transfer
    }
}

const account1 = Account(2563, 1003, 500)
