import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesPagosComponent } from './instrucciones-pagos.component';

describe('InstruccionesPagosComponent', () => {
  let component: InstruccionesPagosComponent;
  let fixture: ComponentFixture<InstruccionesPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstruccionesPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
