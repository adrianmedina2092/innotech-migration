import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesPagosPendientesComponent } from './instrucciones-pagos-pendientes.component';

describe('InstruccionesPagosPendientesComponent', () => {
  let component: InstruccionesPagosPendientesComponent;
  let fixture: ComponentFixture<InstruccionesPagosPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesPagosPendientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesPagosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
