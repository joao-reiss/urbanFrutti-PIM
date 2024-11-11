import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(
    private route:Router
  ) { }

  return(){
    this.route.navigateByUrl('/home');
  }
}
