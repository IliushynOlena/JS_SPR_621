console.log("Hello from JS");


//----------- variable --------
let empty;                          //undefined
let nullObject = null;              //null --> object
let number = 100.33;                //number
let email = "supermail@gmail.com";  //string
let flag = true;                    //boolen
let sum = function(a,b){console.log(`${a} + ${b} = ${a+b}`)}
let array = [1,2,3,true,"red","hello",[11,22,33], sum];

console.log(`Empty  = ${empty}, type : ${typeof(empty)}`);
console.log(`Null object  = ${nullObject}, type : ${typeof(nullObject)}`);
console.log(`Number  = ${number}, type : ${typeof(number)}`);
console.log(`Email  = ${email}, type : ${typeof(email)}`);
console.log(`Flag  = ${flag}, type : ${typeof(flag)}`);
console.log(`Array  = ${array}, type : ${typeof(array)}`);
console.log(`Summa  = ${sum}, type : ${typeof(sum)}`);
console.log(array[6][1])

sum(5,7);
array[array.length-1](7,7)
// number = "hello";
// email = true;
// console.log(`Number  = ${number}, type : ${typeof(number)}`);
// console.log(`Email  = ${email}, type : ${typeof(email)}`);

//--------------- cycles -----------

const numbers = [33,5,9,-8,63,-47,-58];
for (let i = 0; i < numbers.length; i++) {
    console.log(`[${i}] - ${numbers[i]}`)    
}

//get all numbers - forof
for (const num of numbers) {
    console.log(num);
}
// forin - get all index
for (const key in numbers) {
   console.log(key);    
}
console.log(`Lenght = ${numbers.length}`)
numbers[123] = 77;
//get all numbers - forof
for (const num of numbers) {
    console.log(num);
}
console.log(`Lenght = ${numbers.length}`)
// forin - get all index
for (const key in numbers) {
   console.log(key);    
}

console.log("Write message in console");
console.warn("Some warning");
console.error("Very bad error!!!!");

console.log("Number : " + 333 + "!!!!");
console.log("Number : " + 333+100 + "!!!!");
console.log(`Number  = ${333+100} !!!!`)


if(5>3){
    console.log("True");
}
else
    console.log("False");


// switch(key){
//     case 5:
//         break;
//     default:
//         break;
// }

let message = (3>2)?"bigger":"less";


function divide(a,b){
    if(b==0){
        console.error("Can't divide by zero!!");
        return;//break
    }
    return a+b;
}



let numA = +prompt("Enter number A :")
let numB = +prompt("Enter number B :")

console.log("Result : "+ divide(numA,numB))
//alert("Result : "+ divide(45,5))


