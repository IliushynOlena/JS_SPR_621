let login= "my login is Olena";
let end = " end!";

//get element by index
console.log( `login[3] - ${login[3]}`)
console.log( `Char at 3 - ${login.charAt(3)}`)

//конкантенація - додавання рядків
console.log(login + end);

if(login.startsWith("?"))console.log("Star with ?")
else console.log("Don't Start with ?")

if(login.startsWith("m"))console.log("Star with [m]")

if(end.endsWith("!"))console.log("End !")

console.log("Index of first l - index", login.indexOf('l'));
console.log("Index of last l - index", login.lastIndexOf('l'));


if( login.includes("is"))console.log(" 'is' is in row")

console.log(`Login length : ${login.length}`)

var changeLogin = login.replace(" ", " * ");
console.log(changeLogin);

let welcome = "Hello";
console.log(welcome.repeat(5));
console.log("some text".repeat(5));


console.log("slice ", login.slice(3,8));
console.log("Upper case ", login[0].toUpperCase());
console.log("Lower case ", login.toLowerCase());
login[0] == ' '


console.log(Math.round(Math.random()*100))
