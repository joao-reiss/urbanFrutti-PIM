import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  private dataSub = new BehaviorSubject<any>(0);
  data$ = this.dataSub.asObservable();

  constructor() { }
  setDataSub(data: any)
  {
    this.dataSub.next(data);
  }

}
