import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroMessagesComponent } from './components/heroes/hero-messages/hero-messages.component';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroMessagesComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
