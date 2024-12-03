import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.page.html',
  styleUrls: ['./forma-pagamento.page.scss'],
})
export class FormaPagamentoPage{

  constructor(private router:Router) { }

  return()
  {
    this.router.navigateByUrl('/tabs/tab2');
  }

  goToBoleto(){
    this.router.navigateByUrl('/boleto');

  }

  goToPix(){
    this.router.navigateByUrl('/pix');

  }

  goToCreditCard(){
    this.router.navigateByUrl('/cartao-de-credito');
  }

}
