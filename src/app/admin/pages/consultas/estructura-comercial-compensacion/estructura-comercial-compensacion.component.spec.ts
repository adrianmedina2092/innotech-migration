import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraComercialCompensacionComponent } from './estructura-comercial-compensacion.component';

describe('EstructuraComercialCompensacionComponent', () => {
  let component: EstructuraComercialCompensacionComponent;
  let fixture: ComponentFixture<EstructuraComercialCompensacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraComercialCompensacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstructuraComercialCompensacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
