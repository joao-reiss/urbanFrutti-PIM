import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsServiceService {

  constructor() { }

  private activeTab: string = 'home';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getActiveTab(): string {
    return this.activeTab;
  }
}
