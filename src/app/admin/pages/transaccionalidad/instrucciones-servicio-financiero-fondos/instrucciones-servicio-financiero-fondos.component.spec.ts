import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesServicioFinancieroFondosComponent } from './instrucciones-servicio-financiero-fondos.component';

describe('InstruccionesServicioFinancieroFondosComponent', () => {
  let component: InstruccionesServicioFinancieroFondosComponent;
  let fixture: ComponentFixture<InstruccionesServicioFinancieroFondosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesServicioFinancieroFondosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesServicioFinancieroFondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
