import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-de-credito',
  templateUrl: './cartao-de-credito.page.html',
  styleUrls: ['./cartao-de-credito.page.scss'],
})
export class CartaoDeCreditoPage {

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
