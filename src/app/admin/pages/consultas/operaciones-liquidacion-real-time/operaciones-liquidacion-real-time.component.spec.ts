import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesLiquidacionRealTimeComponent } from './operaciones-liquidacion-real-time.component';

describe('OperacionesLiquidacionRealTimeComponent', () => {
  let component: OperacionesLiquidacionRealTimeComponent;
  let fixture: ComponentFixture<OperacionesLiquidacionRealTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesLiquidacionRealTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperacionesLiquidacionRealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
