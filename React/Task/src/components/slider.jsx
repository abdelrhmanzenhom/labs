import { Component, PureComponent } from "react";
import "./Slider.css";

class Slider extends PureComponent {
  constructor() {
    super();
    this.state = {
      images:[
        "pizzas/focaccia.jpg",
        "pizzas/funghi.jpg",
        "pizzas/margherita.jpg",
        "pizzas/prosciutto.jpg",
        "pizzas/salamino.jpg",
        "pizzas/spinaci.jpg"
      ],
      index:0,
    };
     
 this.interval=null;
  }


  render() {
     
     let nextImage = () => {
                let i=this.state.index+1;
                if(i>=this.state.images.length)i=0;

                this.setState({index:i})




  };

  let prevImage =()=>{
    let i=this.state.index-1;
    if(i<0)i=this.state.images.length-1;
   this.setState({index:i})
  };
  let startSliding=()=>{
    if(this.interval==null){
  this.interval =setInterval(() => {
       let i=this.state.index+1;
         if(i>=this.state.images.length)i=0;

this.setState({index:i})
    }, 1000);
}
  }
  let stopSliding=()=>{

        clearInterval(this.interval)
        this.interval=null
  }
    return (
      <div className="main">

        <h1>Slider</h1>

        <div>
          <img
            src={this.state.images[this.state.index]}
            alt="image"
          />
        </div>

        <div>
          <button onClick={prevImage}>Prev</button>
          <button onClick={nextImage}>Next</button>
          <button onClick={startSliding}>Start</button>
          <button onClick={stopSliding}>Stop</button>
        </div>
      </div>
    );
  }
}

export default Slider;
