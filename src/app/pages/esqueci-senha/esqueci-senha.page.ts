import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage{

  constructor(private router: Router) { }

  btnSend(){
    this.router.navigateByUrl('/esqueci-senha2');
  }

}
