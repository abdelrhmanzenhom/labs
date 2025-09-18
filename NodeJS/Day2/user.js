class User{
    constructor(id){
        this.tecketArr=[];
        this.id=id;
    }
    AddTicket(ticket){
        this.tecketArr.push(ticket);
    }
    getTicket(flightNum){
        for(let i=0;i<this.tecketArr.length;i++)
            if(this.tecketArr[i].flightNum==flightNum)
                return this.tecketArr[i];
    }
    displayTickets(){
        return this.tecketArr;
    }

}
module.exports=User;