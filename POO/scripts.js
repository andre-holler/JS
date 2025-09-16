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

    fazerSom(){
        console.log(`${this.nome} raça: ${this.raca} está latindo: Au Au`);
    }
}

class Gato extends Animal{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }

    fazerSom(){
        console.log(`${this.nome} da cor: ${this.cor} está miando: Miau`);
    }
}

const animal = new Animal("Bicho");
const cachorro = new Cachorro("Zick", "Gordo");
const gato = new Gato("Iagozada", "Marrom BomBom")

animal.fazerSom()
cachorro.fazerSom()
gato.fazerSom()