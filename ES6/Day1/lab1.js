let obj={
    name:"zenhom",
    age:24,
    job:"fullstack"
}
for (const key in obj) {
  console.log(obj[key]);
}
//1






let arr=["abd","mohamed","zenhom","abdalti"]
for (const element of arr) {
    console.log(element);
}
for (const key in arr) {
console.log(key)
}

//2 3







let arr2=["abd","mohamed","zenhom","abdalti"]
let arr_copy=[...arr2];
console.log(arr_copy)
//4







let grad=10,name2="abdo",facName="computerScince",uni_name="ainshamse";
console.log(`${name2} is a student in faculty of ${facName} in university ${uni_name} and his final gradi s ${grad}`)
//5

let x="heloo";
console.log('heloo'.includes('e'));
//6

let obj2={
    name:"zz",
    age:null
};

console.log(obj2.age??"22")

//7
let obj3={
  namee:{
    firstName:{
        firstLatter:"A"
    }
  }
};

console.log(obj3.namee.firstName.firstLatter);   


let obj3_3 = {
 namee:{
  }
};

console.log(obj3_3.namee.firstName?.firstLatter);

//8

let obj4={
    first:"1",
    second:"2",
    third:"3"
}
let obj4_copy={...obj4};
console.log(obj4_copy);
obj4_copy.first=5;
console.log(obj4_copy);
console.log(obj4);

//9


const metadata = {
title: 'Scratchpad',
translations: [
{
locale: 'de',
localization_tags: ['de-gen', 'de-or'],
last_edit: '2014-04-14T08:43:37',
url: '/de/docs/Tools/Scratchpad',
titles: 'JavaScript-Umgebung'
}
],
};


const {
title,translations:[{locale,localization_tags:[first,second],last_edit,url,titles}]}=metadata;

console.log(title,locale,first,second,last_edit,url,titles);
//10

let obj10={
    name:"zenhom",
    age:24,
    job:"fullstack"
};
console.log(Object.entries(obj10));

for (const key in obj10) {
    console.log(key.toUpperCase());
}


//11


let symbol_key=Symbol("for the task");
let obj12={
namee:"abdo",
age:24,
[symbol_key]:"private number"
}
console.log(obj12)
console.log(Object.keys(obj12))
for (const key in obj12) {
   console.log(key);
}

//12






