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
