import{Employee,Manager,WorkerBee,SalesPerson,Engineer} from "./lab3.js";
let emp=new Employee()
console.log(emp)
let projectsArr=["website","application","aimodels"]
let eng = new Engineer("abdo",projectsArr,"vscode");
let sales = new SalesPerson("zenhom",projectsArr);
let Mang=new Manager("the man","eng",["afdda","dasfkljz"])
console.log(eng);
console.log(sales);
console.log(Mang)