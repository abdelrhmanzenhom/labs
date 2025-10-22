class Countrys{


    displayCountries=(type)=>{
       // console.log("displaying countries")
      
          if(type=="arabic")
        return ['egypt','afghan','alex','sodya','lbnan','sorya']
          else if(type=="english")
        return ['america','brazil','russa','england']
          else {
            return ['all']
          }
    }
}


class CountryProxy{
 constructor(){
    this.Countrys=new Countrys();
    this.cach=new Map();

 }
 display=(type)=>{
    if(this.cach.has(type)){
        console.log("cached f3ln")
        return this.cach.get(type);

    }
    console.log("first time")
    this.cach.set(type,this.Countrys.displayCountries(type))
    return this.Countrys.displayCountries(type);
 }


}
let c= new CountryProxy();
console.log(c.display("arabic"))
console.log(c.display("arabic"))
console.log(c.display("english"))
console.log(c.display("english"))
console.log(c.display("english"))
console.log(c.display("all"))
