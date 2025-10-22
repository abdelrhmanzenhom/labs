class Device{
 increase_volume=()=>{

    }
    decrease_volume=()=>{

    }
      mute=()=>{

    }
}
class Tv extends Device{
    constructor(){
        super()
        this.volum=5;

    }
    increase_volume=()=>{
          console.log(`tv increasing voice ${++this.volum}`);
    }
      decrease_volume=()=>{
            console.log(`tv desreses voice ${--this.volum}`);
    }
    mute=()=>{
       console.log(`tv is muted ${this.volum=0}`);
    }
    
}
class Speaker extends Device{
constructor(){
        super()
        this.volum=5;

    }
    increase_volume=()=>{
           console.log(`speaker increasing voice ${++this.volum}`);
    }
      decrease_volume=()=>{
            console.log(`speaker desreses voice ${--this.volum}`);
    }
    mute=()=>{
        console.log(`speaker is muted ${this.volum=0}`);
    }
}

class Bridge1{
    constructor(device){
        this.device=device
    }
    increase=()=>{
        this.device.increase_volume();
    }
    decrease=()=>{
        this.device.decrease_volume();
    }
   
}
class Bridge2{
    constructor(device){
        this.device=device
    }
    increase=()=>{
        this.device.increase_volume();
    }
    decrease=()=>{
        this.device.decrease_volume();
    }
    mute=()=>{
        this.device.mute()
    }
}
let speaker =new Speaker();
let b1=new Bridge1(speaker)
b1.increase()
b1.increase()
b1.decrease()
let tv= new Tv();
let b2 =new Bridge2(tv);
b2.increase()
b2.decrease()
b2.mute()
