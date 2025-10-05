import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  imports: [],
  templateUrl: './slide-show.html',
  styleUrl: './slide-show.css'
})
export class SlideShow {
imagesArr:string[]=[
  "/SlideShowImages/elephant.jpg",
  "/SlideShowImages/tiger-jpg.jpg",
  "/SlideShowImages/Dog_Breeds.jpg",

];

index:number=1;
source:string=this.imagesArr[this.index];
 
next():void{
  this.index=(this.index+1)%this.imagesArr.length;
    this.source= this.imagesArr[this.index];
    console.log(this.index)
    
}
prev():void{
  if(this.index-1<0)this.index=this.imagesArr.length;
  this.index=(this.index-1)%this.imagesArr.length;
  this.source=this.imagesArr[this.index];
  console.log(this.index)

}
stop():void{
clearInterval(this.interva)
}
interva:any;
start():void{
  clearInterval(this.interva)
  this.interva=setInterval(() => this.next(), 1000)
}

   
  

}












