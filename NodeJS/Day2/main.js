const User=require("./user.js");
const Flight=require("./flight.js");
let user =new User(1);
let ticket=new Flight(1,2,"newcairo","cairo","2025");
let ticket2=new Flight(2,3,"man","alex","2023");
let ticket3=new Flight(3,4,"tawhed","nor","2024");

user.AddTicket(ticket)
user.AddTicket(ticket2)
user.AddTicket(ticket3)

console.log(user.displayTickets());
console.log(user.getTicket(3));
let t=user.getTicket(3);
t.updateTravlingData("2000");

console.log(user.getTicket(3));