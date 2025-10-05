import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

name:string="";
num:string="";
getnum(val:HTMLInputElement){
this.num=val.value;
}
getName(val:HTMLInputElement){
  this.name=val.value;
}
  Add(val1:HTMLInputElement,val2:HTMLInputElement){

this.getName(val1);
this.getnum(val2);
}
}
