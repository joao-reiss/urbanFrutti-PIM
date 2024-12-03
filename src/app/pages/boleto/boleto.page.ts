import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.page.html',
  styleUrls: ['./boleto.page.scss'],
})
export class BoletoPage {


  constructor(private router:Router) { }

  return()
  {
    this.router.navigateByUrl('/forma-pagamento');
  }

  returnToTab()
  {
    this.router.navigateByUrl('/tabs/tab1');
  }


}
