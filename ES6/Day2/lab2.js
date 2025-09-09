
// /* let studentsName=new Set();


// studentsName.add("ahmed")
// studentsName.add("zenhom")
// studentsName.add("abdo")
// studentsName.add("zenhom")


// console.log(studentsName);


// console.log([...studentsName]);


// for (const element of studentsName) {
//     console.log(element)
// }
//  */

//1


/* let studentCourses=new Map();
studentCourses.set("abdo",{
    Grades:[
        {coursename:"javascript",Grade:"excellent"},
        {Coursename:"Jquery", Grade:"Good"},
    {Coursename:"CSS", Grade:"V.Good"}
    ]
})
studentCourses.set("zenhom",{
    Grades:[
        {coursename:"javascript2",Grade:"excellent2"},
        {Coursename:"Jquery2", Grade:"Good2"},
    {Coursename:"CSS2", Grade:"V.Good2"}
    ]
})
for (const [k,v] of studentCourses) {
    console.log(k)
    for (const element of v.Grades) {
        console.log(element.Grade)
        
    }
  
    
} */

//2

/* let arr=[1,5,3,4,2,4,6,8,5]


console.log(arr.filter((x)=>x%2))
arr.forEach((x)=>{
    if(x%2==0)
console.log(x)
})
console.log
(arr.find(x=>x>5))

arr.map((x1,x2)=>{
return [x1,x2]
})
console.log(arr.map((x1,x2)=>{
return [x1,x2]
})) */

//3
let arr=["tip1","tip2","tip3","tip4","tip5","tip6","tip7","tip8","tip9","tip10"]


function* gen(){
    for (const element of arr) {
        yield element;
        
    }
}



let but=document.querySelector("#first")
const work=gen()
but.addEventListener('click',()=>{
    
   /*  console.log(work.next().value) */
  let pp=  document.querySelector(".pra")
  let work1=work.next().value
  if(work1)
  pp.innerHTML=work1

})
const work2=gen()
let but2=document.querySelector("#second");
but2.addEventListener('click',()=>{
    let pp=  document.querySelector(".pra2")
  
    setInterval(()=>{
        let work1=work2.next().value
  
       if(work1)
  pp.innerHTML=work1

    }
        ,3000)
    
})

console.log(but)
//4

/* function up(a,b){
let sum= a+b
   return  function nested(){
        alert(sum);

    }
}
up(1,3)() */


//5

function reverse(x){
    let ans="";
for(var i=x.length-1;i>=0;i--){
ans+=x[i];
}  
return ans;
}
function reverse2(x){
   let ans= x.split("").reverse().join("");
   return ans;
}
console.log(reverse("abcdefg"))
console.log(reverse2("abcdefg"))

//6

function courseGen({courseName="ES6",courseDuration="3days",courseOwner="javaScript",...argss}={}){

    console.log(`${courseName} ${courseDuration} ${courseOwner}`)
if(Object.keys(argss).length)console.log("error")

}

courseGen({
    courseName:"gg",
    courseDuration:"cc",
    courseOwner:"x",
    t:"t"
    
})

//7

 var fruits = ["apple", "strawberry", "banana", "orange","mango"];
console.log(fruits.every((e)=>typeof e==typeof ""))


console.log(fruits.some((e)=>e.startsWith('a')))

let ans=fruits.filter(e=>e.startsWith("b")||e.startsWith("s"))
ans.forEach(e=>console.log(e)) 




