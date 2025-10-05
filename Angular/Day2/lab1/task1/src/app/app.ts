import { Component, signal } from '@angular/core';
import {SlideShow} from './components/slide-show/slide-show'
import {Form} from './components/form/form'
@Component({
  selector: 'app-root',
  imports: [SlideShow,Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1');
}
