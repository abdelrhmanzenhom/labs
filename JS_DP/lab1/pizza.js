export default class Pizza{
   constructor() {
        this.size = null;
        this.cheese = false;
        this.pepperoni = false;
        this.bacon = false;
        this.onion=false;
    }
     display() {
        console.log(`Pizza [Size: ${this.size}, Cheese: ${this.cheese}, Pepperoni: ${this.pepperoni}, Bacon: ${this.bacon}, extra chess ${this.cheese}]`);
    }
}