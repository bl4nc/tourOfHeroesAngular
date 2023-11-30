import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../interfaces/hero';
import { HeroesService } from '../heroes/heroes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {
  constructor(private heroService: HeroesService) { }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
