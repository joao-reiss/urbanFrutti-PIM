import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormaPagamentoPage } from './forma-pagamento.page';

describe('FormaPagamentoPage', () => {
  let component: FormaPagamentoPage;
  let fixture: ComponentFixture<FormaPagamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
