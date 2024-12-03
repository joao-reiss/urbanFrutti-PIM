import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoDeCreditoPage } from './cartao-de-credito.page';

describe('CartaoDeCreditoPage', () => {
  let component: CartaoDeCreditoPage;
  let fixture: ComponentFixture<CartaoDeCreditoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoDeCreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
