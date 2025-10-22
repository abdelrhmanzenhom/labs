import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-swith-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './swith-task.html',
  styleUrl: './swith-task.css'
})
export class SwithTask {
choosen:string='';

}
