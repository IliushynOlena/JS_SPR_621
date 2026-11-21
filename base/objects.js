
var obj = new Object();

var obj ={};
obj.name = "Olena";
console.log(obj);
obj.name = "Olga";
obj.age = 25;
obj.address = "Rivne"
obj.address = "Kyiv"

console.log(`Address : ${obj.address}`)

delete obj.address;
console.log(obj);
console.log(`Address : ${obj.address}`)


let product = {
    //key : value
    name:"Motorola",
    price: 15999,
    memory:128,
    isLocked : false,
    application:["Chome","Opera","Instagram","Discord"],
    owner:{
        name:"Oleg",
        surname:"Oliunuk"
    }
};

console.log(product)
console.log(`Name product : ${product.name}`)
console.log(`Price : ${product.price}`)
console.log(`Memory : ${product.memory}`)
console.log(`Owner : ${product.owner.name} ${product.owner.surname}`)



var products = {};
products["name"]  = "Ball";
products["size"]  = 35;
products["price"]  = 1500;
products["type"]  = "football";

console.log(products['name'])
console.log(products['size'])
console.log(products['price'])
console.log(products['type'])

products["name"]  = "Football Ball";
products["material"]  = "leather";
console.log(products['name'])
console.log(products['size'])
console.log(products['price'])
console.log(products['type'])
console.log(products['material'])


var student = {};
student.name = "Vlad";
student.age = 18;
student.address = "Rivne,  Soborna 285";

//student.AverageMArk = 15;

student["Average mark"] = 11.3;
console.log(student["Average mark"])

student.averageMark = 3.6;
console.log(student.averageMark)

//delete student.address

if( 'address' in student)
    console.log(student.address)
else
    console.log("Student don't have address")


for (var property in student) {
    console.log(property)
}


for (var property in student) {
    console.log(`Key : ${property}. Value :${student[property]}`)
}


var car = {
    model:"911",
    mark: "Porshe",
    color : "black",
    year:2014,
    volume: 3.6,
    price:125000
}

var res = "\tCar info:\n";
for (const key in car) {
   
    res += key + " : " + car[key] + "\n"; 
    
}
//alert(res);

let person = {
    firstname :"Ivan",
    lastname:"Popchuk",
    birthdate: 2018,
    address: {
        street:"Soborna",
        city:"Rivne",
        building:"5a"
    },
    cars:['Porshe 911',"Mersedes G63","BMB M5","Tesla Model X"]
}

console.log(person.cars)
person.cars.push("Toyota")
console.log(person.cars)







function addCarToPerson(person,newCar){
    person.cars.push(newCar);
}

function showCars(person)
{
    for (const element of person.cars) {
        console.log(element);
    }
}

console.log(`Address : ${person.address.street}. ${person.address.city} ${person.address.building}`);


console.log(person.cars)

addCarToPerson(person,"Lamborghini")
showCars(person)

// let name_car = prompt("Enter name car :")

// addCarToPerson(person,name_car)
// showCars(person)


let player ={
    login:"super_user",
    password:"qwerty1234",
    email:"user@gmail.com",
    score : 0,
    print: function(){
        console.log(`User : ${this.login}. Score : ${this.score}`)
    },
    increaseScore(value)
    {
this.score+=value

    }
}


player.print();
player.increaseScore(100)
player.print();



