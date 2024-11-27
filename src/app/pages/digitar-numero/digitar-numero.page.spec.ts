import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitarNumeroPage } from './digitar-numero.page';

describe('DigitarNumeroPage', () => {
  let component: DigitarNumeroPage;
  let fixture: ComponentFixture<DigitarNumeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitarNumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
