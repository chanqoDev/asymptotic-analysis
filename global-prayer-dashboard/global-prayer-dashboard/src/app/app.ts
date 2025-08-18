import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { ButtonComponent } from './components/button/button';
import { Navbar } from './components/navbar/navbar';
import { Section } from './components/section/section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Card, Navbar, Section, ButtonComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('global-prayer-dashboard');
}
