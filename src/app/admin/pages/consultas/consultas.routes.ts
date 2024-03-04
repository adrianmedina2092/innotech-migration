import { Routes } from '@angular/router';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { CashProjectionComponent } from './cash-projection/cash-projection.component';
import { ComisionesRecuperacionImpuestosComponent } from './comisiones-recuperacion-impuestos/comisiones-recuperacion-impuestos.component';
import { DevolucionRecibosComponent } from './devolucion-recibos/devolucion-recibos.component';
import { DiarioGarantiasComponent } from './diario-garantias/diario-garantias.component';
import { DocumentacionRasComponent } from './documentacion-ras/documentacion-ras.component';
import { EntitlementsComponent } from './entitlements/entitlements.component';
import { EstructuraComercialComponent } from './estructura-comercial/estructura-comercial.component';
import { EstructuraComercialCompensacionComponent } from './estructura-comercial-compensacion/estructura-comercial-compensacion.component';
import { EventosComponent } from './eventos/eventos.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { InformacionFiscalComponent } from './informacion-fiscal/informacion-fiscal.component';
import { InstruccionesClientesComponent } from './instrucciones-clientes/instrucciones-clientes.component';
import { MovimientosEfectivoComponent } from './movimientos-efectivo/movimientos-efectivo.component';
import { OperacionesLiquidacionComponent } from './operaciones-liquidacion/operaciones-liquidacion.component';
import { OperacionesLiquidacionRealTimeComponent } from './operaciones-liquidacion-real-time/operaciones-liquidacion-real-time.component';
import { PosicionEfectivoComponent } from './posicion-efectivo/posicion-efectivo.component';
import { PosicionElegibleComponent } from './posicion-elegible/posicion-elegible.component';
import { PosicionTitulosComponent } from './posicion-titulos/posicion-titulos.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';
import { UbrComponent } from './ubr/ubr.component';
import { EstructuraComercialDepositariaComponent } from './estructura-comercial-depositaria/estructura-comercial-depositaria.component';

export const CONSULTAS_ROUTES: Routes = [
  {
    path: 'auditoria',
    component: AuditoriaComponent,
  },
  {
    path: 'cash-projection',
    component: CashProjectionComponent,
  },
  {
    path: 'comisiones-recuperacion-impuestos',
    component: ComisionesRecuperacionImpuestosComponent,
  },
  {
    path: 'devolucion-recibos',
    component: DevolucionRecibosComponent,
  },
  {
    path: 'disciplina-liquidacion',
    component: DiarioGarantiasComponent,
  },
  {
    path: 'diario-garantias',
    component: DiarioGarantiasComponent,
  },
  {
    path: 'documentacion-ras',
    component: DocumentacionRasComponent,
  },
  {
    path: 'entitlements',
    component: EntitlementsComponent,
  },
  {
    path: 'estructura-comercial',
    component: EstructuraComercialComponent,
  },
  {
    path: 'estructura-comercial-compensacion',
    component: EstructuraComercialCompensacionComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
  {
    path: 'facturacion',
    component: FacturacionComponent,
  },
  {
    path: 'informacion-fiscal',
    component: InformacionFiscalComponent,
  },
  {
    path: 'instrucciones-clientes',
    component: InstruccionesClientesComponent,
  },
  {
    path: 'movimientos-efectivo',
    component: MovimientosEfectivoComponent,
  },
  {
    path: 'operaciones-liquidacion',
    component: OperacionesLiquidacionComponent,
  },
  {
    path: 'operaciones-liquidacion-real-time',
    component: OperacionesLiquidacionRealTimeComponent,
  },
  {
    path: 'posicion-efectivo',
    component: PosicionEfectivoComponent,
  },
  {
    path: 'posicion-elegible',
    component: PosicionElegibleComponent,
  },
  {
    path: 'posicion-titulos',
    component: PosicionTitulosComponent,
  },
  {
    path: 'reclamaciones',
    component: ReclamacionesComponent,
  },
  {
    path: 'ubr',
    component: UbrComponent,
  },
  {
    path: 'estructura-comercial-depositaria',
    component: EstructuraComercialDepositariaComponent,
  },
  {
    path: 'distribucion-patrimonial',
    component: EstructuraComercialDepositariaComponent,
  },
];
