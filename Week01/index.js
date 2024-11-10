console.log('Hello, world 1');
console.log('Hello, world 2')

var obj1 = {
    name: 'leo',
    age: 20
};

var obj2 = {
    fname: "leo",
    myage: 20,
    result:"pass",
    pass: true,
    courses: ['Math', 100, 'English'],
    car: null
};

var x = 100.5
console.log(typeof x)
console.log(typeof obj1)
console.log(typeof obj2.fname)
console.log(typeof obj2.courses)
console.log(typeof obj2.car)

function greet() {
    console.log('Hello, leonardo')
}

console.log(typeof greet)

var greet2 = greet3 = function() {
    console.log('Hello, leonardo')
}

const greet4 = () => {
    console.log('Hello, leonardo')
}

//normal function
function normalFunction(){
    //code stuff
}
//arrow function
const arrowFunction = () =>{
    
}