
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/*

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//function getRandomNumber (a,b){
  //return Math.floor(Math.random() * (b-a) + a);
//}

const indexRandom=( Array) => Math.floor(Math.random()*Array.length){
(params) {
  
}
};
}
function getRandom(anyArray){
  let max = anyArray.length-1;
  let min = 0;
  let random = getRandomNumber(min, max+1);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  //document.querySelector("#excuse").innerHTML= getRandom(who) + " " + getRandom(action) + " " + getRandom (what) +" " + getRandom (when)};*/


//meto todos los array dentro de un objeto , ya que antes tenia 4 variables sueltas 
const excuses = {
  who: ["The dog", "My grandma", "The mailman", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "my phone", "the car"],
  when: ["before the class","when I was sleeping", "while I was exercising","during my lunch","while I was praying"]
};

// genero un indice random del array con una funcion flecha
const getRandomIndex = array => Math.floor(Math.random() * array.length);

// Generar excusa completa
const generateExcuse = () =>
  `${excuses.who[getRandomIndex(excuses.who)]} ${
    excuses.action[getRandomIndex(excuses.action)]
  } ${excuses.what[getRandomIndex(excuses.what)]} ${
    excuses.when[getRandomIndex(excuses.when)]
  }`;

window.onload = () => {
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").textContent = generateExcuse();
};
