import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 25634712453;
const cliente1 = new Cliente("Ricardo", 25632147563);//novo Objeto ou instância
const cliente2 = new Cliente("Alice", 25634712453);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
const conta2 = new contaCorrente(102, cliente2);

contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.transferir(200, conta2);

console.log("Número de contas: " + contaCorrente.numeroDeContas);

//console.log(contaCorrenteRicardo.#saldo);Não consigo ver por quê é um atributo privado