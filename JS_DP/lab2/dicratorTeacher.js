class Teacher{
    constructor(name,age,experince){
        this.name=name;
        this.age=age;
        this.experince=experince;
    }
    display=()=>{
            console.log(`name: ${this.name} , age: ${this.age} , exp: ${this.experince}`)
    }
}

class TeacherDicrator{
    constructor(teacher,salary,nationality,street){
        this.teacher=teacher;
        this.salary=salary;
        this.nationality=nationality;
        this.street=street
    }
     run=()=>{
        teacher.display()
            console.log(`salary: ${this.salary} , nationality: ${this.nationality} , street: ${this.street}`)
    }
}
let teacher=new Teacher("zenhom",12,5);
//teacher.display();
let dicrator=new TeacherDicrator(teacher,3000,"egyption","new cairo");
dicrator.run()
