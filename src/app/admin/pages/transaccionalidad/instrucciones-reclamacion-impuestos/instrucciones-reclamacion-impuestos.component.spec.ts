import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesReclamacionImpuestosComponent } from './instrucciones-reclamacion-impuestos.component';

describe('InstruccionesReclamacionImpuestosComponent', () => {
  let component: InstruccionesReclamacionImpuestosComponent;
  let fixture: ComponentFixture<InstruccionesReclamacionImpuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesReclamacionImpuestosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesReclamacionImpuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
