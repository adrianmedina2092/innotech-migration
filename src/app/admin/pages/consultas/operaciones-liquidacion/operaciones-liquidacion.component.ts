import { Component, OnInit, ViewChild } from '@angular/core';

//COMPONENTS
import { HeroHeaderComponent } from '../../../../shared/components/hero-header/hero-header.component';

//OTHERS
import { BredcrumbModel } from '../../../../core/models/core.interface';
import { COLUMNS_OPERACIONES_LIQUIDACION } from '../../../../mock/operaciones-liquidacion.mock';
import { transformDataConsulta } from '../../../../utils/functions';

//EXTERNALS
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FiltrosService } from '../../../../core/services/filtros.service';

@Component({
  selector: 'app-operaciones-liquidacion',
  standalone: true,
  imports: [HeroHeaderComponent, MatTableModule, MatSort, CommonModule],
  templateUrl: './operaciones-liquidacion.component.html',
  styleUrl: './operaciones-liquidacion.component.scss',
})
export class OperacionesLiquidacionComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: any;
  columns = COLUMNS_OPERACIONES_LIQUIDACION;
  displayedColumns = this.columns.map((c) => c.columnDef);

  reportWasGenerated: boolean = false;
  loading: boolean = false

  dataConsulta: string[][] = [];

  //datos para el hero header
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

  dataFilter = {
    informe: 'configuracion_limites',
    filtros: [
      'estado_asociated_groups',
      'intermediario_asoc',
      'contractual_asoc',
      'usuarios_firmantes',
      'divisa',
      'tipo_transaccionalidad',
      'tipo_grupo_firmante',
    ],
    firstRow: 0,
    lastRow: 50,
    language: 'es',
  };

  constructor(private _filtersService: FiltrosService) {}

  ngOnInit(): void {
    /* this._filtersService.getFilters(this.dataFilter).subscribe((resp) => {
      console.log(resp);
    }); */
    this.dataSource = new MatTableDataSource(
      transformDataConsulta(this.displayedColumns, this.dataConsulta)
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
