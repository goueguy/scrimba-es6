import { Animal,Cat,Player,TennisPlayer } from "./main.js";


let cat = new Cat("Cat",4,"Queue")

cat.makeNoise();
console.log(cat.metaData);

let rogerFederer = new TennisPlayer("Roger Federer","Belgium",45);
const messi = new Player("Messi","Argentina")
console.log(messi.info());
console.log(rogerFederer.playTenis());