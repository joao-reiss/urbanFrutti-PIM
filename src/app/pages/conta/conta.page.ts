import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage {

  constructor( private router:Router) { }

  User: any =
    {
    "nome": "Tyrell Wellick",
    "email": "tyrell_wellick@hotmail.com",
    "celular": "(13) 99965-5432",
    };



    return()
    {
      this.router.navigateByUrl('/tabs/tab1')
    }


}
