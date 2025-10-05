import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-swtich-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './swtich-task.html',
  styleUrl: './swtich-task.css'
})
export class SwtichTask {

choosen:string='asda';

}
