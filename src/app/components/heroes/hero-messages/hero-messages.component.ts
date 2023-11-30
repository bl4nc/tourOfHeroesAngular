import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './hero-messages.service';

@Component({
  selector: 'app-hero-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-messages.component.html',
  styleUrl: './hero-messages.component.sass'
})
export class HeroMessagesComponent {

  constructor(public messageService: MessageService) { }


}
