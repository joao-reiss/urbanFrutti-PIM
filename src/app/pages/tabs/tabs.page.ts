import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TabsServiceService } from 'src/app/services/tabService/tabs-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  selectedTab = "";

  constructor(private tabService: TabsServiceService,
              private router: Router
  ) {}


  ngOnInit() {
    this.selectedTab = this.tabService.getActiveTab();
    if(this.tabService.getActiveTab() == 'home'){
      this.router.navigateByUrl('/tabs/tab1');
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabService.setActiveTab(tab);
  }



}
