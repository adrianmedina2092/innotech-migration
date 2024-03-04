import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent {
  @Input() homeBackground!: string;
}
