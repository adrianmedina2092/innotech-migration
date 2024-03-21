import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../../core/models/core.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  IconDefinition,
  faBars,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'topbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() menuItems!: MenuItem[];

  logo: string = 'assets/logos/logo_caceis_blanco.png';
  menuIcon: IconDefinition = faBars;
  userAccounte: IconDefinition = faCircleUser;
  isMenuOpen: boolean = false;

  dropdownPosition = {
    top: '0',
    left: '200px',
  };

  dropdownChildPosition = {
    top: '-100px',
    left: '100%',
  };

  constructor(private _dataService: DataService){}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showDropdown(event: MouseEvent, item: MenuItem): void {
    if (item.childrens && item.childrens.length > 0) {
      item.showChildren = true;
    }
    const target = event.target as HTMLElement;
    const parent = target.closest('li');

    if (parent) {
      const rect = parent.getBoundingClientRect();

      this.dropdownPosition = {
        top: `${rect.x - rect.y}px`,
        left: `${rect.left}px`,
      };

      this.dropdownChildPosition = {
        top: `${(rect.top / 0)}px`,
        left: `${rect.right - rect.left}px`,
      };

      console.log(this.dropdownChildPosition.top);
      
    }
  }

  hideDropdown(item: MenuItem): void {
    item.showChildren = false;
  }

  setValues(){

  }
}
