import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraComercialDepositariaComponent } from './estructura-comercial-depositaria.component';

describe('EstructuraComercialDepositariaComponent', () => {
  let component: EstructuraComercialDepositariaComponent;
  let fixture: ComponentFixture<EstructuraComercialDepositariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraComercialDepositariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstructuraComercialDepositariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
