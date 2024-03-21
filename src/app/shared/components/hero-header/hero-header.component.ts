import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//EXTERNAL
import { TranslateModule } from '@ngx-translate/core';

//COMPONENTS
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

//MODELS
import { BredcrumbModel } from '../../../core/models/core.interface';

@Component({
  selector: 'hero-header',
  standalone: true,
  imports: [BreadcrumbComponent, FontAwesomeModule, TranslateModule],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss'
})
export class HeroHeaderComponent {
  @Input() title: string = ""
  @Input() icon: any
  @Input() backgroundImage: string = ""
  @Input() breadcrumbElements!: Array<BredcrumbModel>
}
