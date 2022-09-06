export class contaCorrente{
    static numeroDeContas = 0;
    agencia;
    cliente;

    
    set cliente(novoValor){// Usando assessores do tipo set podemos alterar a regra de como um atributo 
    // pode ou não ser modificado sem precisar alterar isso em diversos pontos do código
        if(novoValor instanceof Cliente){
            this.cliente = novoValor;
        }
    }

    get cliente(){
        return this.cliente;
    }

    #saldo = 0;//atributo privado

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1;
    }

    sacar(valor){//método ou função
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(this.#saldo);
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this.#saldo += valor;
        console.log(this.#saldo);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(this.#saldo);
    }
}