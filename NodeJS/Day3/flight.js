class FlightTicket{
    constructor(seatNum,flightNum,departureAirPorts,arrivalAirPorts,TravelingData)
    {
        this.seatNum=seatNum;
        this.flightNum=flightNum;
        this.departureAirPorts=departureAirPorts;
        this.arrivalAirPorts=arrivalAirPorts;
        this.TravelingData=TravelingData;
    }
    
    updateSeatNum(seatNum){
        this.seatNum=seatNum
    }
     updateFlightNum(flightNum){
        this.flightNum=flightNum
    }
     updateDepart(departureAirPorts){
        this.departureAirPorts=departureAirPorts;
    }
     updateArrival(arrivalAirPorts){
        this.arrivalAirPorts=arrivalAirPorts
    }
     updateTravlingData(TravelingData){
        this.TravelingData=TravelingData
    }

}

module.exports=FlightTicket;