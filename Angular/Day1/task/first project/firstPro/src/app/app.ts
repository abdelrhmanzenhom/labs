import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComp} from './components/first-comp/first-comp'
import {Second} from './second/second'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComp,Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstPro');
}
