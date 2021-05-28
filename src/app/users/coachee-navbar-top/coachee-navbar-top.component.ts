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
  isLoaded: boolean;

  constructor(private route: ActivatedRoute, private coachService: CoachService, private authService: AuthenticationService) {
    this.coachId = 0;
  }

  ngOnInit(): void {
    this.id = this.authService.getUserId();
    this.coachService.getCoachIdbyCoacheeId(this.id)
      .subscribe(coachId => {
        this.coachId = coachId;
        this.isLoaded = true;
      });
  }

}
