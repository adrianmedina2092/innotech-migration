import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposFirmantesLimitesComponent } from './grupos-firmantes-limites.component';

describe('GruposFirmantesLimitesComponent', () => {
  let component: GruposFirmantesLimitesComponent;
  let fixture: ComponentFixture<GruposFirmantesLimitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruposFirmantesLimitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GruposFirmantesLimitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
