//Type Annotation
//Type  Annotation to check the type of parameter variable functio     

//Type function
let  Name:  string ="Hello  "+"ShahzaibZaman";
console.log(Name);

//Type Number
let age:number=25; 
age  = 44;
console.log(age);

//Type Boolean
 let islam:Boolean=true;
 console.log(islam); 


//    CHAT GBT                          TASK  About Type Annotation 

let userName:string ="ShahzaibZaman";
let userAge:number =15;
let isOnline:boolean=true;

console.log(`User   ${userName}  is ${userAge} year old  and currently   ${isOnline ?"online":"ofline"}`)

//Add type annotation in para meter
function userData(userName:string ,userAge:number ,isOnline:boolean):string{

 //   return  the msg
return  `User   ${userName}  is ${userAge} year old  and currently   ${isOnline ?"online":"ofline"}`

}

console.log(userData("Ali",20,false))



//  Sir                     Task of Type Annotaion


function Multiply(numone:number ,numtwo:number):number{
    //Debug line
    console.log(numone + numtwo)
 return numone * numtwo 
}

console.log(Multiply(3,3))

//                  Task 2

function Data(Fullname:string,Age:number):string{
    let msg=`${Fullname} is ${Age} Year old.`;
    return msg

}

console.log(Data("Allah Bakash",30))


//                      task  with interface  

interface Car{
    Brand:string,
    Model:string,
    Year:number,
    isElectric:boolean
}

const Car1:Car={
Brand:"Toyota",
Model:"Suzaki",
Year:2001,
isElectric:false
};

console.log(Car1)

function Car2(Car2: Car){
    let msg=`The ${Car2.Brand} Model ${Car2.Model} was made in ${Car2.Year} and it is ${Car2.isElectric ?" Electric Car":"Not Eletric car"};   `;
    return msg

}
console.log(Car2(Car1));











