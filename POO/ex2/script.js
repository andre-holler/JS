class Instrumento{
    constructor(nome){
        this.nome
    }

    tocar(){
        console.log(`O instrumento ${this.nome} está emitindo som.`)
    }
}

class Violao extends Instrumento{
    constructor(nome, cordas){
        super(nome),
        this.cordas = cordas
    }

    tocar(){
        console.log(`O violão com ${this.violao} cordas está tocando: plim plim!`)
    }
}

class Bateria extends Instrumento{
    constructor(nome, pecas){
        super(nome)
        this.pecas = pecas
    }

    
}