import Pizza from "./pizza.js";
export default class PizzaBuilder{
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


