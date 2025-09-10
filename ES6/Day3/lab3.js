export class Employee{
    name;
    dept;
    constructor(name="",dept="general"){
        this.name=name;
        this.dept=dept;
    }

}

export class Manager extends Employee{
reports=[];
constructor(name,dept,reports=[]){
    super(name,dept)
this.reports=reports;

}


}

export class WorkerBee extends Employee{
    projects=[];
    constructor(name,dept,projects=[]){    
super(name,dept);
this.projects=projects;
    }
    
   
}

export class SalesPerson extends WorkerBee{
    quota;
  
    constructor(name,projects=[],quota=100){
        super(name,"sales",projects);
        this.quota=quota;
        


    }

}
export class Engineer extends WorkerBee{
    machine="";
   
    constructor(name,projects=[],machine){
          super(name,"engineering",projects);
        this.machine=machine;
      

    }
}



async function fetchData() {
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await res.json();
       //console.log(data)
       
       let ol=document.createElement("ol");
       
       for (const element of data) {
        let li=document.createElement("li");
        li.innerHTML=element.name;
      //  console.log(element.name)
        ol.appendChild(li);
         let res2=await fetch("https://jsonplaceholder.typicode.com/users/"+element.id+"/posts");
          let data2=await res2.json();
          let ol2=document.createElement("ol");
           li.appendChild(ol2)
        for (const key of data2) {
          
          let li2=document.createElement("li");
         li2.innerHTML=key.title;
         ol2.appendChild(li2);
          //console.log("each post title",key.title)
        }
        
       }
       document.body.appendChild(ol);
       /* 
        for (const key of data) {
            //console.log(key.id)
          let res2=await fetch("https://jsonplaceholder.typicode.com/users/"+key.id+"/posts");
          let data2=await res2.json();
         // console.log(data2)
        } */
    } catch (error) {
        console.log(error)
        
    }
    
}
fetchData();
