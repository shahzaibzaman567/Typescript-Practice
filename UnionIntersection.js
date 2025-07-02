console.log("Hello");
console.log("Worlds");
//to give   Admin or Costomer this is called union
function Login(User) {
    return User;
}
console.log(Login({ Name: "ali", role: "Admin" }));
console.log(Login({ username: "shahzaib", Purchase: 3000 }));
//              task   2         //
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
