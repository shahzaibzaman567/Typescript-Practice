//Type Annotation
//Type  Annotation to check the type of parameter variable functio     
//Type function
var Name = "Hello  " + "ShahzaibZaman";
console.log(Name);
//Type Number
var age = 25;
age = 44;
console.log(age);
//Type Boolean
var islam = true;
console.log(islam);
//    CHAT GBT                          TASK  About Type Annotation 
var userName = "ShahzaibZaman";
var userAge = 15;
var isOnline = true;
console.log("User   ".concat(userName, "  is ").concat(userAge, " year old  and currently   ").concat(isOnline ? "online" : "ofline"));
//Add type annotation in para meter
function userData(userName, userAge, isOnline) {
    //   return  the msg
    return "User   ".concat(userName, "  is ").concat(userAge, " year old  and currently   ").concat(isOnline ? "online" : "ofline");
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
    var msg = "".concat(Fullname, " is ").concat(Age, " Year old.");
    return msg;
}
console.log(Data("Allah Bakash", 30));
var Car1 = {
    Brand: "Toyota",
    Model: "Suzaki",
    Year: 2001,
    isElectric: false
};
console.log(Car1);
function Car2(Car2) {
    var msg = "The ".concat(Car2.Brand, " Model ").concat(Car2.Model, " was made in ").concat(Car2.Year, " and it is ").concat(Car2.isElectric ? " Electric Car" : "Not Eletric car", ";   ");
    return msg;
}
console.log(Car2(Car1));
//                          Task 3                              //
var carCacheIndex = [
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
var Person1 = {
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
    data.filter(function (item) { return true; });
    console.log(data);
}
arraychech([123, 333, 33, "3333"]);
