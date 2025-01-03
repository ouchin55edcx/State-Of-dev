import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomePageComponent],
  template: `
    <app-header></app-header>
    <app-home-page></app-home-page>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent { }

