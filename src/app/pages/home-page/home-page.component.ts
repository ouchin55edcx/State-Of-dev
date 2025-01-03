import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  template: `
    <main>
      <app-hero-section></app-hero-section>
    </main>
  `,
  styles: []
})
export class HomePageComponent { }
