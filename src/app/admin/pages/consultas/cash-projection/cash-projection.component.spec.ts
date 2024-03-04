import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashProjectionComponent } from './cash-projection.component';

describe('CashProjectionComponent', () => {
  let component: CashProjectionComponent;
  let fixture: ComponentFixture<CashProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
