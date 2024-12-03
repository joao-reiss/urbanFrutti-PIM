import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoletoPage } from './boleto.page';

describe('BoletoPage', () => {
  let component: BoletoPage;
  let fixture: ComponentFixture<BoletoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
