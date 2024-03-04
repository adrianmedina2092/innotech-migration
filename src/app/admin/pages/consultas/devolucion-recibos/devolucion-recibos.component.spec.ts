import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionRecibosComponent } from './devolucion-recibos.component';

describe('DevolucionRecibosComponent', () => {
  let component: DevolucionRecibosComponent;
  let fixture: ComponentFixture<DevolucionRecibosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevolucionRecibosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevolucionRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
