import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionPatrimonialComponent } from './distribucion-patrimonial.component';

describe('DistribucionPatrimonialComponent', () => {
  let component: DistribucionPatrimonialComponent;
  let fixture: ComponentFixture<DistribucionPatrimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribucionPatrimonialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistribucionPatrimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
