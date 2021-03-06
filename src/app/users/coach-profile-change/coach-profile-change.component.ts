import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-profile-change',
  templateUrl: './coach-profile-change.component.html',
  styleUrls: ['./coach-profile-change.component.css']
})
export class CoachProfileChangeComponent implements OnInit {

  title = 'Coachify | Update Profile Coach';
  emailString = 'mailto:xyz@example.com?Subject=profile-change-as-a-coach';

  constructor() { }

  ngOnInit(): void {
    document.title = this.title;
  }

}
