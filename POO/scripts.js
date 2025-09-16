class Animal{
    constructor(nome){
        this.nome = nome;
    }
    fazerSom(){
        console.log(`${this.nome} está fazendo um som...`);
    }
}

class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
}

