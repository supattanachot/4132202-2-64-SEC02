let cars = ["Toyota","Honda","Mazada"];
let fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
let rname = new Array ("win","john","Jame");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1,0,"Mazada","Kubota");

const carslide = cars.slice(1,2);
console.log(carslide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [...cars,...rname];
console.log(newArr2);

console.log(newArr.toString());

//itteration
let text = "";
for (value of rname) {
    text += value + ":";
}
console.log(text);

const numbers = [10,20,30]
numbers.forEach(addNum);
console.log(numbers);

function addNum(value,inde,array){
    console.log(value + 2);
}

const ns = numbers.map(addNumMap);
console.log(ns);
function addNumMap(value){
    return value * 2;
}

const over10 = numbers.filter(over10fn);
console.log(over10);
function over10fn(value){
    return value > 10;
}

const reover10 = numbers.reduce(over10fn);
console.log(reover10);

const everover10 = numbers.every(over10fn);
console.log(everover10);
const someover10 = numbers.some(over10fn);
console.log(someover10);

let resFind = numbers.find(over10fn);
console.log(resFind);
let resFindIndex = numbers.indexOf(over10fn);
console.log(resFindIndex);

let alphab = Array.from("ABCDefG021");
console.log(alphab);