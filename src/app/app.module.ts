import { HeroesComponent } from './heroes/heroes.component';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    HeroesComponent
  ],

})
export class AppModule { }
