import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesLiquidacionComponent } from './instrucciones-liquidacion.component';

describe('InstruccionesLiquidacionComponent', () => {
  let component: InstruccionesLiquidacionComponent;
  let fixture: ComponentFixture<InstruccionesLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesLiquidacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
