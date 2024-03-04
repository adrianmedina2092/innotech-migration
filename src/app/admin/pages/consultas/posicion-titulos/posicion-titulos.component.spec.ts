import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionTitulosComponent } from './posicion-titulos.component';

describe('PosicionTitulosComponent', () => {
  let component: PosicionTitulosComponent;
  let fixture: ComponentFixture<PosicionTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosicionTitulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosicionTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
