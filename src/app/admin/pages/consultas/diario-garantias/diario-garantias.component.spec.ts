import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioGarantiasComponent } from './diario-garantias.component';

describe('DiarioGarantiasComponent', () => {
  let component: DiarioGarantiasComponent;
  let fixture: ComponentFixture<DiarioGarantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiarioGarantiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiarioGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
