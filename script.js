"use strict";
//Type Annotation
//Type  Annotation to check the type of parameter variable functio     
//Type function
let Name = "Hello  " + "ShahzaibZaman";
console.log(Name);
//Type Number
let age = 25;
age = 44;
console.log(age);
//Type Boolean
let islam = true;
console.log(islam);
//    CHAT GBT                          TASK  About Type Annotation 
let userName = "ShahzaibZaman";
let userAge = 15;
let isOnline = true;
console.log(`User   ${userName}  is ${userAge} year old  and currently   ${isOnline ? "online" : "ofline"}`);
//Add type annotation in para meter
function userData(userName, userAge, isOnline) {
    //   return  the msg
    return `User   ${userName}  is ${userAge} year old  and currently   ${isOnline ? "online" : "ofline"}`;
}
console.log(userData("Ali", 20, false));
//  Sir                     Task of Type Annotaion
function Multiply(numone, numtwo) {
    //Debug line
    console.log(numone + numtwo);
    return numone * numtwo;
}
console.log(Multiply(3, 3));
//                  Task 2
function Data(Fullname, Age) {
    let msg = `${Fullname} is ${Age} Year old.`;
    return msg;
}
console.log(Data("Allah Bakash", 30));
const Car1 = {
    Brand: "Toyota",
    Model: "Suzaki",
    Year: 2001,
    isElectric: false
};
console.log(Car1);
function Car2(Car2) {
    let msg = `The ${Car2.Brand} Model ${Car2.Model} was made in ${Car2.Year} and it is ${Car2.isElectric ? " Electric Car" : "Not Eletric car"};   `;
    return msg;
}
console.log(Car2(Car1));
//                          Task 3                              //
let carCacheIndex = [
    {
        Brand: "Toyota",
        Model: "Suzaki",
        Year: 2001,
        isElectric: false
    },
    {
        Brand: "Tesla",
        Model: "fortuner",
        Year: 2001,
        isElectric: true,
    }
];
console.log(carCacheIndex[1]);
//All value has put 
const Person1 = {
    Name: "shahzaibZaman",
    Age: 15,
    Height: 5.4,
    Address: {
        country: "Pakistan",
        state: "Islamabd",
        city: "Peshawar"
    }
};
//final result
console.log(Person1);
//Craet a function which recive only those type  which has filter funciton  
//Using Generic  Type   <T>
//// || Task 4 || ////
//This is very long and diffecult so we can use generics  
function Vega(Name) {
    return Name;
}
console.log(Vega("Potato"));
console.log(Vega(100));
//HOw to use genric and this advanteges 
//Q! how can not use any  ?
//Ans  is and  can return the data type of this potato 100 and true is Any but 
//But the <T> means  generic  return the type like 100 return number.
function Fruit(Name) {
    return Name;
}
console.log(Fruit("Potato"));
console.log(Fruit(100));
console.log(Fruit(true));
//Generic in array
function arraychech(data) {
    data.filter((item) => true);
    console.log(data);
}
arraychech([123, 333, 33, "3333"]);
//chat GBT   task  
function oodEven(num) {
    if (num % 2 === 1) {
        console.log("ood number");
    }
    else {
        console.log("its event number");
    }
}
console.log(oodEven(34));
function marafun(data) {
    return data.Name;
}
console.log(marafun({ Name: "ali" }));
