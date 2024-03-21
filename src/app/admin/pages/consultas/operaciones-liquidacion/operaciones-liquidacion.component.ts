import { Component, OnInit, ViewChild } from '@angular/core';

//COMPONENTS
import { HeroHeaderComponent } from '../../../../shared/components/hero-header/hero-header.component';

//OTHERS
import { BredcrumbModel } from '../../../../core/models/core.interface';
import { COLUMNS_OPERACIONES_LIQUIDACION } from '../../../../mock/operaaciones-liquidacion.mock';
import { transformDataConsulta } from '../../../../utils/functions';

//EXTERNALS
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-operaciones-liquidacion',
  standalone: true,
  imports: [HeroHeaderComponent, MatTableModule, MatSort],
  templateUrl: './operaciones-liquidacion.component.html',
  styleUrl: './operaciones-liquidacion.component.scss',
})
export class OperacionesLiquidacionComponent implements OnInit {
  dataSource: any;
  columns = COLUMNS_OPERACIONES_LIQUIDACION;
  displayedColumns = this.columns.map((c) => c.columnDef);

  @ViewChild(MatSort) sort!: MatSort;

  background: string = 'assets/images/bg-7.webp';
  title: string = 'Operaciones liquidación';
  icon: IconDefinition = faBriefcase;

  //objeto de definicion del breadcrumb
  breadcrumbElements: Array<BredcrumbModel> = [
    {
      name: 'Mis Consultas',
    },
    {
      name: 'Operaciones liquidación',
      route: 'page/consultas/operaciones-liquidacion',
    },
  ];

  data = [
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
    ['1', 'Hydrogen', '1.0079', 'H'],
    ['2', 'Helium', '4.0026', 'He'],
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      transformDataConsulta(this.displayedColumns, this.data)
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
