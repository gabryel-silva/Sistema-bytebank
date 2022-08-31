class cliente{//classe
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){//método ou função
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(this.#saldo);
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }
}

const cliente1 = new cliente();//novo Objeto ou instância
cliente1.nome = "Ricardo";
cliente1.cpf = 25632147563;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 25634712453;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);