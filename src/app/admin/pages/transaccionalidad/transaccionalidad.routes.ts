import { Routes } from '@angular/router';
import { ClientesDocumentadosComponent } from './clientes-documentados/clientes-documentados.component';
import { GruposFirmantesLimitesComponent } from './grupos-firmantes-limites/grupos-firmantes-limites.component';
import { InstruccionesEventosComponent } from './instrucciones-eventos/instrucciones-eventos.component';
import { InstruccionesLiquidacionComponent } from './instrucciones-liquidacion/instrucciones-liquidacion.component';
import { InstruccionesNormaComponent } from './instrucciones-norma/instrucciones-norma.component';
import { InstruccionesNormaGestionComponent } from './instrucciones-norma-gestion/instrucciones-norma-gestion.component';
import { InstruccionesNormaPendientesComponent } from './instrucciones-norma-pendientes/instrucciones-norma-pendientes.component';
import { InstruccionesReclamacionImpuestosComponent } from './instrucciones-reclamacion-impuestos/instrucciones-reclamacion-impuestos.component';
import { InstruccionesServicioFinancieroFondosComponent } from './instrucciones-servicio-financiero-fondos/instrucciones-servicio-financiero-fondos.component';
import { InstruccionesServicioFinancieroForexComponent } from './instrucciones-servicio-financiero-forex/instrucciones-servicio-financiero-forex.component';
import { ValidadoresComponent } from './validadores/validadores.component';

export const TRANSACCIONALIDAD_ROUTES: Routes = [
  {
    path: 'clientes-documentados',
    component: ClientesDocumentadosComponent,
  },
  {
    path: 'grupos-firmantes-limites',
    component: GruposFirmantesLimitesComponent,
  },
  {
    path: 'instrucciones-eventos',
    component: InstruccionesEventosComponent,
  },
  {
    path: 'instrucciones-liquidacion',
    component: InstruccionesLiquidacionComponent,
  },
  {
    path: 'instrucciones-norma',
    component: InstruccionesNormaComponent,
  },
  {
    path: 'instrucciones-norma-gestion',
    component: InstruccionesNormaGestionComponent,
  },
  {
    path: 'instrucciones-norma-pendientes',
    component: InstruccionesNormaPendientesComponent,
  },
  {
    path: 'instrucciones-reclamacion-impuestos',
    component: InstruccionesReclamacionImpuestosComponent,
  },
  {
    path: 'instrucciones-servicio-financiero-fondos',
    component: InstruccionesServicioFinancieroFondosComponent,
  },
  {
    path: 'instrucciones-servicio-financiero-forex',
    component: InstruccionesServicioFinancieroForexComponent,
  },
  {
    path: 'validadores',
    component: ValidadoresComponent,
  },
];
