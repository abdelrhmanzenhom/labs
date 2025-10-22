class Manger1{
    printManger1(workForManger1){
        console.log(`this is the work of ${workForManger1}`)
    }
}
class Emp1{
    printEmp1(workForemp1){
        console.log(`this is the work of ${workForemp1}`)
    }
}
class Cart{
    printCart(workForCart){
        console.log(`this is the work of ${workForCart}`)
    }
}
class Emp2{
    printEmp2(workForemp2){
        console.log(`this is the work of ${workForemp2}`)
    }
}

class Facade{
    constructor(){
        this.manager=new Manger1();
        this.emp1=new Emp1();
        this.emp2=new Emp2();
        this.cart=new Cart();
    }
    Solution(w1,w2,w3,w4){
        this.manager.printManger1(w1);
        this.emp1.printEmp1(w2);
        this.emp2.printEmp2(w3);
        this.cart.printCart(w4);
    }
}


let run=new Facade();
run.Solution("manager","employe one","employe two","cart ")
