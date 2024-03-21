import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeHeroComponent } from './shared/components/home-hero/home-hero.component';

import { MenuItem } from './core/models/core.interface';
import { menu } from './constants/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuItems: MenuItem[] = menu;
}
