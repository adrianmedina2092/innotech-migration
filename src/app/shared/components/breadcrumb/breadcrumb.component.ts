import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//MODELS
import { BredcrumbModel } from '../../../core/models/core.interface';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent{
  @Input() breadcrumbElements: Array<BredcrumbModel> = []
}
