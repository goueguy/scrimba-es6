import {data} from './example.js';
import {add} from './data.js'
let updatedData = data;

updatedData.push(5);
//console.log(updatedData);

let result = add(12,10);
console.log(result);


function mystery(...params) {
return params;
}
let a = mystery(1,23,4);
console.log(a);