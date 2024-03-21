import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFavoritasComponent } from './consultas-favoritas.component';

describe('ConsultasFavoritasComponent', () => {
  let component: ConsultasFavoritasComponent;
  let fixture: ComponentFixture<ConsultasFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultasFavoritasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
