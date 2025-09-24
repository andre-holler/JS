class Esporte{
    constructor(nome){
        this.nome = nome
    }

    jogar(){
        console.log(`O esporte ${this.nome} está sendo praticado`)
    }
}

class Futebol extends Esporte{
    constructor(nome, jogadores){
        super(nome), 
        this.jogadores = jogadores
    }

    jogar(){
        console.log(`O jogo de futebol X está sendo jogado com ${this.jogadores} jogadores em campo`)
    }
}

class Basquete extends Esporte{
    constructor(nome, pontos){
        super(nome),
        this.pontos = pontos
    }

    jogar(){
        console.log(`O jogo de basquete x está com pontos marcados até agora`)
    }
}

class Tenis extends Esporte{
    constructor(nome, sets){
        super(nome),
        this.sets = sets
    }

    jogar(){
        console.log(`O jogo de tênis x está no set número ${this.sets}`)
    }
}

const fut = new Futebol('fut', 22)
const bqt = new Basquete('bqt', 67)
const tns = new Tenis('tns', 2)

fut.jogar()
bqt.jogar()
tns.jogar()