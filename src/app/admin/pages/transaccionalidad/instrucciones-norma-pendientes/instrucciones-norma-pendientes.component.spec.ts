import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesNormaPendientesComponent } from './instrucciones-norma-pendientes.component';

describe('InstruccionesNormaPendientesComponent', () => {
  let component: InstruccionesNormaPendientesComponent;
  let fixture: ComponentFixture<InstruccionesNormaPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesNormaPendientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesNormaPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
