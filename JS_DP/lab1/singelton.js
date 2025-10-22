

let instance
let count=0;
function Single(){
   this.count=count
if(instance )console.log("true")
    else {instance=this;count++;}
}
let cnt1=new Single();
console.log(count,cnt1.count);
let cnt2=new Single();
console.log(count,cnt2.count);
let cnt3=new Single();
console.log(count,cnt3.count);