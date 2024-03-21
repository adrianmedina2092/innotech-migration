import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { HomeHeroComponent } from '../../../shared/components/home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  homeBackground: string = 'assets/images/paris.jpeg';

  constructor() {}

  ngOnInit(): void {}
}
