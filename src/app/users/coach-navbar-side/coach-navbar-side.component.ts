import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-coach-navbar-side',
  templateUrl: './coach-navbar-side.component.html',
  styleUrls: ['./coach-navbar-side.component.css']
})
export class CoachNavbarSideComponent implements OnInit {

  id: number;

  constructor(private authserv: AuthenticationService) {
  }

  ngOnInit(): void {
    console.log(this.authserv.getUserId());
  }

}
