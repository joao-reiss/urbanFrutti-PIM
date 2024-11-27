import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage{

  constructor(private router: Router,
              private alert: AlertController
  ) { }

   return(){
    this.router.navigateByUrl('/tabs/tab1');
  }

  async sendHelp(){
    const alert = await this.alert.create({
      cssClass: "my-custom-class",
      message:'Problema relatado!',
      buttons: ["Ok"],
    });
    alert.present();
  }

}
