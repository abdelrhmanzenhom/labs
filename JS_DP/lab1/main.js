import StudentFactory from "./factory.js";
import PizzaBuilder from './pizzaBuilder.js'
let stud1=new StudentFactory();
let stud2=new StudentFactory();
let stud3=new StudentFactory();
const students = [
   stud3.createStudent("athlete", "Sarah", 11,"MMA"),
    stud1.createStudent("club", "Omar", 10, "Science Club"),
    stud2.createStudent("athlete", "Mina", 12, "Football")
];

students.forEach(student => console.log(student.getInfo()));


let p1=new PizzaBuilder().setSize("3").addBacon().addExtraCheese().builder();
p1.display()