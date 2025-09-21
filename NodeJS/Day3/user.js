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
    return "there is no flight with this number";
    }
    displayTickets(){
        if(this.tecketArr.length>0)
        return this.tecketArr;
        else return "there is no tickets"
    }

}
module.exports=User;