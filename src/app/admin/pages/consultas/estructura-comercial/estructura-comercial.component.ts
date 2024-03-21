import { Component } from '@angular/core';

//COMPONENTS
import { HeroHeaderComponent } from '../../../../shared/components/hero-header/hero-header.component';
import { IconDefinition, faBriefcase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-estructura-comercial',
  standalone: true,
  imports: [HeroHeaderComponent],
  templateUrl: './estructura-comercial.component.html',
  styleUrl: './estructura-comercial.component.scss',
})
export class EstructuraComercialComponent {
  background: string = 'assets/images/bg-7.webp';
  title: string = 'Comercial Structure';
  icon: IconDefinition = faBriefcase;
}
