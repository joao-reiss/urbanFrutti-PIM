import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  username = "Tyrell Wellick";

  ngOnInit(){
    this.menu.open();
  }
  constructor(private menu: MenuController,
    private router:Router
  ) {}

  dismissSideMenu(){
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
}
