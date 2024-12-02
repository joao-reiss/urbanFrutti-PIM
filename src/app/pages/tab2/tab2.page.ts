import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  username = "Tyrell Wellick";

  constructor(private menu: MenuController,
    private router:Router,
    private params: ParamsService) {}

    produtos: any = {
      "id" : "",
      "nmProdutos": " Melancia",
      "qtd_estoque": 0,
      "url_img": "../../../assets/melanciaTeste.png",
      "descricao":" Aproximadamente 3kg",
      "preco" : "R$12,99"

    }

    ngOnInit(){
      this.params.data$.subscribe(data =>{
        this.produtos.qtd_estoque = data;
      });
    }


      addProduct(){
      this.produtos.qtd_estoque = this.produtos.qtd_estoque + 1;
      this.params.setDataSub(this.produtos.qtd_estoque);
    }

    removeProduct(){

      if(this.produtos.qtd_estoque !== 0)
      {
        this.produtos.qtd_estoque = this.produtos.qtd_estoque -1;
        this.params.setDataSub(this.produtos.qtd_estoque);
      }
    }

    goToPayment(){
      this.router.navigateByUrl('/forma-pagamento');
    }
}
