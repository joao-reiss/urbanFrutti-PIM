import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage{

  constructor(private router: Router) { }

  return(){
    this.router.navigateByUrl('/tabs/tab1');
  }
}
