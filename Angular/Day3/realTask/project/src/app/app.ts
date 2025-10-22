import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwithTask } from './components/swith-task/swith-task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDb } from './components/product-db/product-db';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SwithTask,ProductDb],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
