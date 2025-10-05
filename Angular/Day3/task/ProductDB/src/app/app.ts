import { Component, signal } from '@angular/core';

import { SwtichTask } from './components/swtich-task/swtich-task';
import { CommonModule } from '@angular/common';
import { ProductDashBoard } from './components/product-dash-board/product-dash-board';

@Component({
  selector: 'app-root',
  imports: [SwtichTask,CommonModule,ProductDashBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProductDB');
}
