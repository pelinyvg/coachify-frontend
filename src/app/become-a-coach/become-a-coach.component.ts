import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-become-a-coach',
  templateUrl: './become-a-coach.component.html',
  styleUrls: ['./become-a-coach.component.css']
})
export class BecomeACoachComponent implements OnInit {

  title = 'Coachify | Become a Coach';
  emailString = 'mailto:xyz@example.com?Subject=Become-a-coach';

  constructor() {
  }

  ngOnInit(): void {
    document.title = this.title;
  }

}
