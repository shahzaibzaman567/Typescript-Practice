console.log("Hello")
console.log("Worlds")
// command to change the file name:     alias union="npx ts-node UnionIntersection.ts"

// Union and intersection type 
//    ||          task       ||         //

interface Admin {
    Name: string;
    role: "Admin"
}

interface Costumer {
    username: string;
    Purchase: number;
}
//to give   Admin or Costomer this is called union
function Login(User: Admin | Costumer) {

    return User;
}
console.log(Login({ Name: "ali", role: "Admin" }));
console.log(Login({ username: "shahzaib", Purchase: 3000 }))

//              task   2         //
//Intersection



// interface  superUser extends Admin{
//     Name:string;
//     role:"Admin";
//     Costumer:string;
//     Purchase:number;

//}





function  Intersection(Super:Admin&Costumer){

return  Super

}

console.log(Intersection({Name:"ali",role:"Admin",username:"shah",Purchase:200}) )


//what  is Auto Merging ?  
//Auto merging can use in interface only the interface was declare but use all properties
//this is called overloading

interface Student{
    Name:string;
}

interface Student{
    Class:string ;
}
interface Student{
    RollNo:number;

}

const St1:Student={
    Name:"shahzaib",
    Class: 9 +"th",
    RollNo:804
}




console.log(St1);

//            ||          Task with Enum        ||    //
//what is enum to we use to creat a group of we kam a constant valu  


enum Role {
    Student = "Student",
    Teacher = "Teacher",
    Principal = "Principal"
}

function School(role:Role){


    if(Role.Student === role){
console.log("📚 Homework karo...");
    }
   else if(Role.Teacher===role){
        console.log("🧑‍🏫 Students ko parhao...");
    }
    else if(Role.Principal===role){
        console.log("🎓 School manage karo...");
    }
    else{
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



enum gender{
    Male="Male",
    Female="Female",
    Other="Other",
}
interface Per {
    Name:string;
    Age:number;
    gender:gender;

}

const P1:Per={
    Name:"shahzaib",
    Age:15,
    gender:gender.Male
}
const P2:Per={
    Name:"fatima",
    Age:40,
    gender:gender.Female
}
console.log(P1)
console.log(P2)








