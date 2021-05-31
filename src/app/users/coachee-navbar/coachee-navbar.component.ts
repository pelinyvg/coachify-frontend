import {Component, OnInit} from '@angular/core';
import {Coachee} from '../../model/coachee';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-coachee-navbar',
  templateUrl: './coachee-navbar.component.html',
  styleUrls: ['./coachee-navbar.component.css']
})
export class CoacheeNavbarComponent implements OnInit {

  id: number;
  isNotCoach: boolean;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.isNotCoach = !this.authenticationService.isCoach();
    this.id = this.route.snapshot.params.id;
  }

}
