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
        console.log(`O violão com ${this.cordas} cordas está tocando: plim plim!`)
    }
}

class Bateria extends Instrumento{
    constructor(nome, pecas){
        super(nome)
        this.pecas = pecas
    }

    tocar(){
        console.log(`A bateria com ${this.pecas} peças está tocando: tum tum pá`)
    }
}

class Flauta extends Instrumento{
    constructor(nome, material){
        super(nome),
        this.material = material
    }

    tocar(){
        console.log(`A flauta de ${this.material} está tocando: fui fui!`)
    }
}

const violao1 = new Violao('violao1', 6)
const bateria1 = new Bateria('bateria1', 10)
const flauta1 = new Flauta('flauta1', 'madeira')

violao1.tocar()
bateria1.tocar()
flauta1.tocar()