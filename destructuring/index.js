const player ={
    name:'Lebron James',
    club:'LA Lakers',
    address:{
        city:'Los Angeles'
    }
};

const {name,club,address:{city}}=player;

const student = {
    name:"KYLE",
    age:10,
    projects:{
        diceGame:"Two player dice game using Javascript"
    }
}

const {name:completeName,age,projects:{diceGame}}= student;
// console.log(completeName,age,diceGame);

let names = ["DYLAN","CODING SPIRIT","ISRAEL"];
const [firstName,objectif,lastName] = names;
console.log(firstName,objectif,lastName);