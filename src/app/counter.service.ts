import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterActive: number = 0;
  counterInactive: number = 0;

  updateCounter(status: string) {
    status === 'toActive'
      ? this.counterActive++
      : this.counterInactive++;
    console.log(this.counterActive + ' & '+ this.counterInactive);
  }


}
