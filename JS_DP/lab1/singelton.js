

let instance
let count=0;
function Count(){
   
if(instance )console.log("true")
    else {instance=this;count++;}
}
let cnt1=new Count();
let cnt2=new Count();
let cnt3=new Count();
console.log(count);