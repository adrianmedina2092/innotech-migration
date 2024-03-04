import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaLiquidacionComponent } from './disciplina-liquidacion.component';

describe('DisciplinaLiquidacionComponent', () => {
  let component: DisciplinaLiquidacionComponent;
  let fixture: ComponentFixture<DisciplinaLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinaLiquidacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisciplinaLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
