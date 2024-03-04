import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesRecuperacionImpuestosComponent } from './comisiones-recuperacion-impuestos.component';

describe('ComisionesRecuperacionImpuestosComponent', () => {
  let component: ComisionesRecuperacionImpuestosComponent;
  let fixture: ComponentFixture<ComisionesRecuperacionImpuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComisionesRecuperacionImpuestosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComisionesRecuperacionImpuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
