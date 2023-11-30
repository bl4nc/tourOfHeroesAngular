import { Hero } from './../../interfaces/hero';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesService } from './heroes.service';
import { HeroMessagesComponent } from './hero-messages/hero-messages.component';
import { MessageService } from './hero-messages/hero-messages.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgFor,
    HeroDetailComponent,
    HeroMessagesComponent
  ],

  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.sass'
})



export class HeroesComponent {
  //Injeção
  constructor(private heroService: HeroesService, private messages: MessageService) { }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
