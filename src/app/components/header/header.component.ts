import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-gray-900 text-white">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-neon-green">State of Dev</a>
        <div class="hidden md:flex space-x-4">
          <a href="#" class="hover:text-neon-blue transition-colors duration-300">2020</a>
          <a href="#" class="hover:text-neon-blue transition-colors duration-300">2021</a>
          <a href="#" class="hover:text-neon-blue transition-colors duration-300">2022</a>
          <a href="#" class="hover:text-neon-blue transition-colors duration-300">2023</a>
          <a href="#" class="hover:text-neon-blue transition-colors duration-300">Playground</a>
          <a href="#" class="hover:text-neon-blue transition-colors duration-300">FAQ</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hover:text-neon-blue transition-colors duration-300">Github</a>
        </div>
        <button class="md:hidden focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
        </button>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent { }

