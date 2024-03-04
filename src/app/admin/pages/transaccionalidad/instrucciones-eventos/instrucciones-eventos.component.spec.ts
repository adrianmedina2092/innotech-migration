import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesEventosComponent } from './instrucciones-eventos.component';

describe('InstruccionesEventosComponent', () => {
  let component: InstruccionesEventosComponent;
  let fixture: ComponentFixture<InstruccionesEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
