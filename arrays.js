
let obj = new Object();

//example  1
var array = new Array();
array[0]=100;
array[1]=200;
array[2]=300;


//example  2
var array = new Array(6,5.4,8,9,14,25);

for (let i = 0; i < array.length; i++) {
    console.log( `Index [${i}] - ${array[i]}` ) ;    
}




//example  3
var array = [];//empty array

var array = [5, 5,11,-5,458,-36,-47,5,8,65];

console.log(`Lenght : ${array.length}`)

for (const element of array) {
    console.log(element);
}
array[2] = 444;
//array[20] = 444;
for (const element of array) {
    console.log(element);
}
//for    forof   forin   foreach

//foreach - має приймати функцію - що робити з 
//кожним елементом масиву
array.forEach((elem, index)=>{
console.log( `Index [${index}] - ${elem}` ) ;  
})

//forof - показує всі елементи масиву
for (const element of array) {
     console.log(element);
}

//forin
for (const index in array) {
      console.log(index);    
    
}
// ============= Arrays methods ==============
console.log("original array", array);
//add to the end
array.push(777);
console.log("original array", array);

//delete element at the end
array.pop();
console.log("original array", array);

//delete first element
array.shift();
console.log("original array", array);

//add to the start element
array.unshift(1000);
console.log("original array", array);

console.log("Index of first 5 - index", array.indexOf(5));
console.log("Index of last 5 - index", array.lastIndexOf(5));

console.log("Find ", array.find((element)=>element<0));
console.log("Find ", array.find((element)=>element>0));


array.sort()
console.log("original array", array);

array.sort((a,b)=>(a-b))
console.log("original array", array);

//remove elements by diapazon
array.splice(2,5);
console.log("original array", array);

//filter array
const filtered = array.filter((el)=>el%2==0);
console.log("Filtered  array", filtered);

const colors =["red","green","yellow","black","pink"];

const message = colors.join(" - ");
console.log(message);

let words = message.split(" ");
console.log(words)