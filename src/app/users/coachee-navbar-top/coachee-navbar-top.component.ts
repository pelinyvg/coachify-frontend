import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-coachee-navbar-top',
  templateUrl: './coachee-navbar-top.component.html',
  styleUrls: ['./coachee-navbar-top.component.css']
})
export class CoacheeNavbarTopComponent implements OnInit {

  id: number;
  coachId: number;

  constructor(private route: ActivatedRoute, private coachService: CoachService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.id = this.authService.getUserId();
    this.coachService.getCoachIdbyCoacheeId(this.id).subscribe(coachId => this.coachId = coachId);
  }


}
