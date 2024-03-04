import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesServicioFinancieroForexComponent } from './instrucciones-servicio-financiero-forex.component';

describe('InstruccionesServicioFinancieroForexComponent', () => {
  let component: InstruccionesServicioFinancieroForexComponent;
  let fixture: ComponentFixture<InstruccionesServicioFinancieroForexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesServicioFinancieroForexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesServicioFinancieroForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
