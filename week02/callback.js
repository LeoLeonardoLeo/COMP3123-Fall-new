var add = function(a, b){
    return a + b;
}
var sub = function(a, b){
    return a - b;
}
var makeacall = function(a, b, add, sub){
    if (a > b){
        return sub(a, b);
    }
    else{
        return add(a, b);
    }
    callback(a, b);
}
var test = makeacall(5, 3, add, sub) //8

console.log(test)

var print = function (){
    console.log("hello 1");
}
setInterval(print, 1000);

setInterval(()=>{
    console.log("hello 2");
}, 2000);