import { ParamsService } from './../../services/params.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  username = "Tyrell Wellick";
  data: any;
  ngOnInit() {
    this.params.data$.subscribe(data =>{
      this.produtos.qtd_estoque = data;
    });

  }

  constructor(private menu: MenuController,
    private router:Router,
    private params:ParamsService
  ) {}

  produtos: any = {
    "id" : "",
    "nmProdutos": " Melancia",
    "qtd_estoque": 0,
    "url_img": "../../../assets/melanciaTeste.png",
    "descricao":" Aproximadamente 3kg",
    "preco" : "R$12,99"

  }


  async dismissSideMenu(){
    this.menu.close();
  }
  logOut(){
    this.router.navigateByUrl('/home');
    this.menu.close();
  }
  contactUs(){
    this.router.navigateByUrl('/suporte');
  }
  accountSettings(){
    this.router.navigateByUrl('/conta');
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
}
