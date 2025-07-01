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

                    //                          Task 3                              //

let carCacheIndex:Car[]=[
    {
        Brand:"Toyota",
        Model:"Suzaki",
        Year:2001,
        isElectric:false
        },
        
        {
            Brand:"Tesla",
            Model:"fortuner",
            Year:2001,
            isElectric:true,
            }
            
    
]


console.log(carCacheIndex[1])


//The Address has inheri in person
interface  address{
    country:string,
    state:string,
    city:string



}

interface Person  {
    Name:string,
    Age:number,
    Height:number,
    Address:address

}
//All value has put 
const Person1:Person={
    Name:"shahzaibZaman",
    Age:15,
    Height:5.4,
    Address:{
        country:"Pakistan",
        state:"Islamabd",
        city:"Peshawar"
    }

    
}
//final result
console.log(Person1)

//Craet a function which recive only those type  which has filter funciton  
//Using Generic  Type   <T>
               //// || Task 4 || ////

               //This is very long and diffecult so we can use generics  

function Vega(Name:string|number):string|number{
    return Name;

}

console.log(Vega("Potato"))
console.log(Vega(100))


//HOw to use genric and this advanteges 

//Q! how can not use any  ?
//Ans  is and  can return the data type of this potato 100 and true is Any but 
//But the <T> means  generic  return the type like 100 return number.

function Fruit<T>(Name:T):T{
    return Name;

}

console.log(Fruit("Potato"))
console.log(Fruit(100))
console.log(Fruit(true))

//Generic in array

function arraychech<T extends{filter:Function}>(data:T):void{
    data.filter((item:any)=>true);
    console.log(data)

}
arraychech([123,333,33,"3333"])

