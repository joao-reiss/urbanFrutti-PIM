import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitar-numero',
  templateUrl: './digitar-numero.page.html',
  styleUrls: ['./digitar-numero.page.scss'],
})
export class DigitarNumeroPage {

  constructor(private router:Router) { }

btnSend(){
  this.router.navigateByUrl('/confirmar-novo-numero')
}

}
