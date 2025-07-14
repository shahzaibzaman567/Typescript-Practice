"use strict";
console.log("Hello");
console.log("Worlds");
//to give   Admin or Costomer this is called union
function Login(User) {
    return User;
}
console.log(Login({ Name: "ali", role: "Admin" }));
console.log(Login({ username: "shahzaib", Purchase: 3000 }));
//              task   2         //
//Intersection
// interface  superUser extends Admin{
//     Name:string;
//     role:"Admin";
//     Costumer:string;
//     Purchase:number;
//}
function Intersection(Super) {
    return Super;
}
console.log(Intersection({ Name: "ali", role: "Admin", username: "shah", Purchase: 200 }));
const St1 = {
    Name: "shahzaib",
    Class: 9 + "th",
    RollNo: 804
};
console.log(St1);
//            ||          Task with Enum        ||    //
//what is enum to we use to creat a group of we kam a constant valu  
var Role;
(function (Role) {
    Role["Student"] = "Student";
    Role["Teacher"] = "Teacher";
    Role["Principal"] = "Principal";
})(Role || (Role = {}));
function School(role) {
    if (Role.Student === role) {
        console.log("📚 Homework karo...");
    }
    else if (Role.Teacher === role) {
        console.log("🧑‍🏫 Students ko parhao...");
    }
    else if (Role.Principal === role) {
        console.log("🎓 School manage karo...");
    }
    else {
        throw new Error("❌ Error: Role not found");
    }
}
School(Role.Student);
//with                  chat GBT
// enum Role {
//     Student = "Student",
//     Teacher = "Teacher",
//     Principal = "Principal"
// }
// function School(role: Role) {
//     if (Role.Student === role) {
//         console.log("📚 Homework karo...");
//     } else if (Role.Teacher === role) {
//         console.log("🧑‍🏫 Students ko parhao...");
//     } else if (Role.Principal === role) {
//         console.log("🎓 School manage karo...");
//     } else {
//         throw new Error("❌ Error: Role not found");
//     }
// }
// School(Role.Student); // ✅ Correct call
//                  task                //
//creat a person interface  with key:fullame: string ,age:number, gender:Enum
var gender;
(function (gender) {
    gender["Male"] = "Male";
    gender["Female"] = "Female";
    gender["Other"] = "Other";
})(gender || (gender = {}));
const P1 = {
    Name: "shahzaib",
    Age: 15,
    gender: gender.Male
};
const P2 = {
    Name: "fatima",
    Age: 40,
    gender: gender.Female
};
console.log(P1);
console.log(P2);
