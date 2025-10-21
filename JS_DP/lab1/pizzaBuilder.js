class Pizza{
   constructor() {
        this.size = null;
        this.cheese = false;
        this.pepperoni = false;
        this.bacon = false;
        this.onion=false;
    }
     display() {
        console.log(`Pizza [Size: ${this.size}, Cheese: ${this.cheese}, Pepperoni: ${this.pepperoni}, Bacon: ${this.bacon},]`);
    }
}
class PizzaBuilder{
    constructor(){
    this.pizza=new Pizza()
    }
    setSize=(size)=>{
            this.pizza.size=size;
            return this
    }
    addBacon=()=>{
        this.pizza.bacon=true;
        return this
    }
    addOnion=()=>{
        this.pizza.onion=true;
        return this
    }
    addExtraCheese=()=>{
        this.pizza.cheese=true;
        return this
    }
builder=()=>{
    return this.pizza;
}
}

let p1=new PizzaBuilder().setSize("3").addBacon().builder();
p1.display()
