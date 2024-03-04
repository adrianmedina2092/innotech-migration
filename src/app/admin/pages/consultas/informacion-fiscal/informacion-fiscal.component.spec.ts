import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFiscalComponent } from './informacion-fiscal.component';

describe('InformacionFiscalComponent', () => {
  let component: InformacionFiscalComponent;
  let fixture: ComponentFixture<InformacionFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionFiscalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
