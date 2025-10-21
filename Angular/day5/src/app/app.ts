import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
