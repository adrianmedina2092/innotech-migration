import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesPagosGestionComponent } from './instrucciones-pagos-gestion.component';

describe('InstruccionesPagosGestionComponent', () => {
  let component: InstruccionesPagosGestionComponent;
  let fixture: ComponentFixture<InstruccionesPagosGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesPagosGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesPagosGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
