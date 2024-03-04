import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraComercialComponent } from './estructura-comercial.component';

describe('EstructuraComercialComponent', () => {
  let component: EstructuraComercialComponent;
  let fixture: ComponentFixture<EstructuraComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraComercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstructuraComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
