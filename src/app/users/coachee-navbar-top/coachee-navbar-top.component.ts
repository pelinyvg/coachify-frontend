import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  color: string;
  indexOfCoaches:number;

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService,
    private authService: AuthenticationService,
    private router: Router,
    ) {
    this.coachId = 0;
    this.color = 'yellow darken-2';
  }

  ngOnInit(): void {
    this.id = this.authService.getUserId();
    this.coachService.getCoachIdbyCoacheeId(this.id).subscribe(coachId => {
      this.coachId = coachId;
    });
    this.indexOfCoaches = this.router.url.indexOf('/coaches/');
    if (this.router.url.indexOf('/coaches/') === 0) {
      this.color = 'teal lighten-3';
    }
  }
}
