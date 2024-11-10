//Question 1
//Rewrite the following code block using ES6 syntax, 
//ie. const, let, arrow function, template literals
//and for..of
console.log("----------Question 1--------------")
let gretter = (myArray, counter) => {
    let greetText = 'Hello'


    for (let index of myArray){
        console.log(`${greetText} ` + `${index}`);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


//Question 2
//Using destructuring assignment syntax and the spread operator, write a function will capitalize the
//first letter of a string.
console.log("\n----------Question 2--------------")
let cap = (str) => {
    let [first, ...rest] = str;
    console.log(first.toUpperCase() + rest.join(''))
}

cap('hello')

//Question 3
//Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
//the first character of each Color in the following array.
console.log("\n----------Question 3--------------")
let students = ["patrick", "spongebob", "sandy", "squidward"];
let cap2 = (str) => {
    let [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
}

let capColours = students.map(cap2);

console.log(capColours);

//Question 4
//Using array.proto.filter create a function that will filter out all the values of the array that are less
//than twenty.
console.log("\n----------Question 4--------------")
let greaterThan20 = (num) => {
    return num.filter(numbers => numbers >= 20);
}

console.log(greaterThan20([1, 2, 90, 40, 50, 5, 60]));


//Question 5
//Using array.proto.reduce create calculate the sum and product of a given array
console.log("\n----------Question 5--------------")
let calculation = (arr) => {
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

    let product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    return { product, sum } 
}

let result = calculation([1,2,3,4,5,6])
console.log(result)

//Question 6 
//Using ES6 syntax for class and subclass using 
//extends to create a Sedan subclass which derives from Car Class. 
//The parameters for the Car class is the model and year. The parameters for the
//subclass is the model, year and balance.
//Use the super key word in the Sedan subclass to set the model and name in base Car constructor
console.log("\n----------Question 6--------------")
class car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    displayInfo(){
        console.log(`The model is ${model} \nThe year is ${year}`)
    }
}

class Sedan extends car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    displayInfo(){
        super.displayInfo();
        console.log(`balance is $${balance}`)
    }
}

let car1 = new Sedan('idk', 2013, 40000)
console.log(car1)