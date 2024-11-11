import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage {

  constructor( private router:Router) { }

    return()
    {
      this.router.navigateByUrl('/tabs/tab1')
    }


}
