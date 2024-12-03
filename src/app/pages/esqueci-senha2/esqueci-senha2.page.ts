import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqueci-senha2',
  templateUrl: './esqueci-senha2.page.html',
  styleUrls: ['./esqueci-senha2.page.scss'],
})
export class EsqueciSenha2Page {

  constructor(private router:Router) { }

  return(){
    this.router.navigateByUrl('/home');
  }
}
