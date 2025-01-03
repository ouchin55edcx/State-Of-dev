import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The State of <span class="text-neon-green">Development</span>
          </h1>
          <p class="text-xl mb-8 text-gray-300">
            Join thousands of developers in the largest survey of the development community.
            Share your experience and get insights about the latest trends in software development.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              class="bg-neon-blue hover:bg-neon-green transition-colors duration-300 text-white font-bold py-3 px-8 rounded-full"
            >
              Start Survey
            </a>
            <a
              href="/admin"
              class="border border-neon-green hover:bg-neon-green hover:text-white transition-colors duration-300 text-neon-green font-bold py-3 px-8 rounded-full"
            >
              Login as Admin
            </a>
          </div>
          <div class="mt-12 text-gray-400">
            <p>Previous editions:</p>
            <div class="flex gap-4 mt-2">
              <a href="#" class="hover:text-neon-blue transition-colors duration-300">2020</a>
              <a href="#" class="hover:text-neon-blue transition-colors duration-300">2021</a>
              <a href="#" class="hover:text-neon-blue transition-colors duration-300">2022</a>
              <a href="#" class="hover:text-neon-blue transition-colors duration-300">2023</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroSectionComponent { }

