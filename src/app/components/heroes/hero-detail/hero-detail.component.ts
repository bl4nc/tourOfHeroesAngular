import { Hero } from './../../../interfaces/hero';
import { Component, Input } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.sass'
})

export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private location: Location
  ) { }

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
