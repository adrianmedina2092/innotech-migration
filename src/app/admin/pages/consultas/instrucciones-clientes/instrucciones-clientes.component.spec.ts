import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesClientesComponent } from './instrucciones-clientes.component';

describe('InstruccionesClientesComponent', () => {
  let component: InstruccionesClientesComponent;
  let fixture: ComponentFixture<InstruccionesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
