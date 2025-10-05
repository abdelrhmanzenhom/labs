import { CommonModule } from '@angular/common';
import { Component ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [FormsModule,CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {


}
