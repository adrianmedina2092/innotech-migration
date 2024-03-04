import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionElegibleComponent } from './posicion-elegible.component';

describe('PosicionElegibleComponent', () => {
  let component: PosicionElegibleComponent;
  let fixture: ComponentFixture<PosicionElegibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosicionElegibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosicionElegibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
