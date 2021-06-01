import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-authorized-user',
  templateUrl: './not-authorized-user.component.html',
  styleUrls: ['./not-authorized-user.component.css']
})
export class NotAuthorizedUserComponent implements OnInit {
  title = 'Coachify | Not Authorized';

  constructor() { }

  ngOnInit(): void {
    document.title = this.title;
  }

}
