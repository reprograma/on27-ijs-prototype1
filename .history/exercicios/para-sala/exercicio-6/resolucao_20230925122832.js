// Os métodos de `Account` são:
// `credit(amount)`, que adiciona o valor especificado ao montante. Imprime na console o resultado.
// `debit(amount)`, que subtrai o valor especificado do montante
// `transferTo(anotherAccount, amount)`, que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada.

function Account(numero, agencia, montante){
    let account = Object.create(Account.prototype);

    account.numero = numero;
    account.agencia = agencia;
    account.montante = montante; // !== 0

    return account;
}

Account.prototype.credit = function credit (amount){ // não pode ser uma função anônima
    this.montante += amount;
    console.log(`Seu crédito é de R$${this.montante}`)
}

Account.prototype.debit = function debit (amount){
    if(this.montante >= amount){  
        this.montante -= amount;
        console.log(`Seu crédito é de R$${this.montante}`)
    } else{
        console.log(`Saldo insuficiente para realizar a transação. Seu crédito é de R$${this.montante}`)
    }
}

Account.prototype.transferTo= function transferTo(anotherAccount, amount){
    if (amount > this.montante){
        throw new Error('Saldo insuficiente para realizar a operação')
    } else{
        let transfer = anotherAccount.montante += amount
        console.log(`Transferência de R$${amount} realizada com sucesso`)
        return transfer
    }
}

const account1 = Account(2563, 1003, 500)
console.log(account1)
account1.debit(200)
account1.credit(900)