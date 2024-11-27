import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviarSmsPage } from './enviar-sms.page';

describe('EnviarSmsPage', () => {
  let component: EnviarSmsPage;
  let fixture: ComponentFixture<EnviarSmsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarSmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
