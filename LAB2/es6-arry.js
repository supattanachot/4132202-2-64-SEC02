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