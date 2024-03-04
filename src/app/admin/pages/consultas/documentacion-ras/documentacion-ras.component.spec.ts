import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionRasComponent } from './documentacion-ras.component';

describe('DocumentacionRasComponent', () => {
  let component: DocumentacionRasComponent;
  let fixture: ComponentFixture<DocumentacionRasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacionRasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentacionRasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
