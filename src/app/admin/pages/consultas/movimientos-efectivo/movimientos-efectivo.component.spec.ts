import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosEfectivoComponent } from './movimientos-efectivo.component';

describe('MovimientosEfectivoComponent', () => {
  let component: MovimientosEfectivoComponent;
  let fixture: ComponentFixture<MovimientosEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimientosEfectivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimientosEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
