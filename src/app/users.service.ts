import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersActive: string[] = ['Max', 'Anna'];
  usersInactive: string[] = ['Chris', 'Manu'];

  counterIncreased = new EventEmitter<string>()

  constructor() { }


  onSetToInactive(id: number) {
    this.usersInactive.push(this.usersActive[id]);
    this.usersActive.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.usersActive.push(this.usersInactive[id]);
    this.usersInactive.splice(id, 1);
  }
}
