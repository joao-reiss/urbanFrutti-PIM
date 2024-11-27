import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltercaoSenhaPage } from './altercao-senha.page';

describe('AltercaoSenhaPage', () => {
  let component: AltercaoSenhaPage;
  let fixture: ComponentFixture<AltercaoSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AltercaoSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
