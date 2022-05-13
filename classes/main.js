
export class Animal{
    constructor(type,legs){
        this.type=type;
        this.legs=legs;
    }
    makeNoise(sound='Loud Noise'){
        console.log(sound);
    }
    get metaData(){
        return `Type: ${this.type}, Legs:${this.legs}`;
    }
    static return10(){
        return 10;
    }
}

export class Cat extends Animal{
    constructor(type,legs,tail){
        super(type,legs);
        this.tail = tail;
    }

    makeNoise(sound="Meow"){
        console.log(sound);
    }
}
//*************CLASSES CHALLENGES

export class Player{

    constructor(name,country){
        this.name=name;
        this.country=country;
    }
    info(){
        console.log(`${this.name} was born in ${this.country}`);
    }
}
export class TennisPlayer extends Player{
    constructor(name,country,age){
        super(name,country)
        this.age=age;
    }
    playTenis(){
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

