let first:string="1";
let num:number=1;
let bol:boolean=true;
let arr:number[]=[1,2,3,4]
console.log(first,num,bol,arr)

//lab1

let mixedArr:unknown[]=[1,"asdf",true,{a:"akjdsf"},["a","af"]]
function printArrayElemeents(arr:any[]){
    for (const element of arr) {
           console.log(typeof element,element);
    }
 

}
printArrayElemeents(mixedArr)

//lab2

enum TrafficLight{
    Red="Stop",
    Yellow="Get Ready",
    Green="Go"

}
function getAction(x:string):string{
    return x;

}
console.log(getAction(TrafficLight.Red))
console.log(getAction(TrafficLight.Yellow))
console.log(getAction(TrafficLight.Green))

//lab3

enum Role{
    Admin,
    User,
    Guest
}
let userInfo:[id:number,name:string,role:Role]=[1,"abdo",Role.Admin];
function describeUser(tuble:[number,string,Role]){
console.log(tuble);

}
describeUser(userInfo)

//lab4

function caps(x:(string|number)):string{
    if(typeof x=="string")return x.toUpperCase();
    return "$"+x;
    
}
console.log(caps(5))

//lab5

let unkon:unknown="abcdef";
function processInput(x:unknown){
if(typeof x=="string")return x.toUpperCase();
else if(typeof x=="number")return x*x
}
console.log(processInput(unkon))



//lab6

