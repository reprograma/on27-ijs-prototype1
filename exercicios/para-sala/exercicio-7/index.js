const { Account } = require("./resolucao.js");

luaraAccount = new Account(1, 123, 1234, 10000);
luaraAccount.credit(2000);
luaraAccount.debit(500);

outraconta = new Account(2, 456, 1235, 100);
luaraAccount.transferTo(outraconta, 11500);
luaraAccount.closeAccount();

maisUmaConta = new Account(2, 456, 4321, 0);
maisUmaConta.closeAccount();
console.log(maisUmaConta);
