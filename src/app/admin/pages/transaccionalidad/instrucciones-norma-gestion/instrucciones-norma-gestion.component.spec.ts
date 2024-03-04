import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesNormaGestionComponent } from './instrucciones-norma-gestion.component';

describe('InstruccionesNormaGestionComponent', () => {
  let component: InstruccionesNormaGestionComponent;
  let fixture: ComponentFixture<InstruccionesNormaGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesNormaGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesNormaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
