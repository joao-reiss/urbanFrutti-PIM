import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarNovoNumeroPage } from './confirmar-novo-numero.page';

describe('ConfirmarNovoNumeroPage', () => {
  let component: ConfirmarNovoNumeroPage;
  let fixture: ComponentFixture<ConfirmarNovoNumeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarNovoNumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
