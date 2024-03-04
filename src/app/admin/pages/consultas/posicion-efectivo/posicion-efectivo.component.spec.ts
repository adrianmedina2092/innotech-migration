import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionEfectivoComponent } from './posicion-efectivo.component';

describe('PosicionEfectivoComponent', () => {
  let component: PosicionEfectivoComponent;
  let fixture: ComponentFixture<PosicionEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosicionEfectivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosicionEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
