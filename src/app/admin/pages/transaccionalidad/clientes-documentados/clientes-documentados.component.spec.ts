import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDocumentadosComponent } from './clientes-documentados.component';

describe('ClientesDocumentadosComponent', () => {
  let component: ClientesDocumentadosComponent;
  let fixture: ComponentFixture<ClientesDocumentadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesDocumentadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesDocumentadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
