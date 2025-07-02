console.log("Hello")
console.log("Worlds")
// command to change the file name:     alias union="npx ts-node UnionIntersection.ts"

// Union and intersection type 
//    ||          task       ||         //

interface Admin{
    Name:string;
    role:"Admin"
}

interface Costumer{
    username:string;
    Purchase:number;
}

  function Login(User:Admin | Costumer){
  
    return User;
  }      
  console.log(Login({Name:"ali",role:"Admin"}));
  console.log(Login({username:"shahzaib",Purchase:3000}))