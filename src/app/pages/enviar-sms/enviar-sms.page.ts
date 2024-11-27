import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-sms',
  templateUrl: './enviar-sms.page.html',
  styleUrls: ['./enviar-sms.page.scss'],
})
export class EnviarSmsPage  {

  constructor(private router: Router) { }

  changeNumber(){
    this.router.navigateByUrl('/digitar-numero')
  }
}
