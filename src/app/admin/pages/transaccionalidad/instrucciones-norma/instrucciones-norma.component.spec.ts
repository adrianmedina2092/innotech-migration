import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesNormaComponent } from './instrucciones-norma.component';

describe('InstruccionesNormaComponent', () => {
  let component: InstruccionesNormaComponent;
  let fixture: ComponentFixture<InstruccionesNormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesNormaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesNormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
