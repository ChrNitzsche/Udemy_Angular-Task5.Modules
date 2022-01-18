import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterActive: number = 0;
  counterInactive: number = 0;

  constructor(private counter: CounterService,
              private userStatus: UsersService) {
    this.userStatus.counterIncreased.subscribe(
      (status: string) => {
        counter.updateCounter(status);
        this.setValues();
      }
    );
  }

  private setValues() {
    this.counterActive = this.counter.counterActive;
    this.counterInactive = this.counter.counterInactive;
  }

  ngOnInit(): void {
    this.setValues();
  }

}
