import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altercao-senha',
  templateUrl: './altercao-senha.page.html',
  styleUrls: ['./altercao-senha.page.scss'],
})
export class AltercaoSenhaPage  {

  constructor(private router:Router) { }


  return()
  {
    this.router.navigateByUrl('/conta')
  }

}
