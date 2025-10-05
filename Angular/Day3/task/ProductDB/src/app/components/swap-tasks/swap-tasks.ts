import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-swap-tasks',
  imports: [FormsModule,CommonModule],
  templateUrl: './swap-tasks.html',
  styleUrl: './swap-tasks.css'
})
export class SwapTasks {
choosenTask:string="";
change(c:string){
 
    this.choosenTask=c

}
}