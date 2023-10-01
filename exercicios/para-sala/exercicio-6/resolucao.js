function Account(number, agency, balance) {
	let account = Object.create(Account.prototype);

	account.number = number;
	account.agency = agency;
	account.balance = balance;

	return account;
}

Account.prototype.credit = function credit(amount) {
	this.balance += amount;
	console.log(
		`O valor de ${amount} foi adicionado à sua conta. Seu saldo é de R$${this.balance}.`
	);
};

Account.prototype.debit = function debit(amount) {
	if (this.balance >= amount) {
		this.balance -= amount;
		console.log(
			`O valor de ${amount} foi debitado de sua conta. Seu saldo é de R$${this.balance}.`
		);
	} else {
		console.log("Você não tem saldo suficiente para esta operação");
	}
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
	if (this.balance >= amount) {
		this.balance -= amount;
		anotherAccount.balance += amount;

		console.log(
			`Transferência realizada com sucesso! Seu novo saldo é de: R$${this.balance}`
		);
	} else {
		throw "Você não tem saldo suficiente para esta operação.";
	}
};

module.exports = { Account };
