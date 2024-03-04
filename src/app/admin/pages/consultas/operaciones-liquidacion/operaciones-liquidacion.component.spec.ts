import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesLiquidacionComponent } from './operaciones-liquidacion.component';

describe('OperacionesLiquidacionComponent', () => {
  let component: OperacionesLiquidacionComponent;
  let fixture: ComponentFixture<OperacionesLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesLiquidacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperacionesLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
