import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { menu } from './constants/menu';
import { MenuItem } from './core/models/core.interface';
import { HomeHeroComponent } from './shared/components/home-hero/home-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems: MenuItem[] = menu;

  homeBackground: string = "assets/images/paris.jpeg"
}
