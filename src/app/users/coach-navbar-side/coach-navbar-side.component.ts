import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-coach-navbar-side',
  templateUrl: './coach-navbar-side.component.html',
  styleUrls: ['./coach-navbar-side.component.css']
})
export class CoachNavbarSideComponent implements OnInit {
  id: number;
  coachId: number;
  color:string;

  constructor(private route: ActivatedRoute,
              private authserv: AuthenticationService,
              private coachService: CoachService,
              private router: Router) {
    this.color = 'yellow darken-2';
  }

  ngOnInit(): void {
    this.id = this.authserv.getUserId();
    this.coachService.getCoachIdbyCoacheeId(this.id).subscribe(cId => this.coachId = cId);
    // keeping the next line as a comment, in case there is a bug with the routing in the menu
    // ! It is making a bug when clicking rapidly between the tabs of the coach side bar
    // this.coachId = this.route.snapshot.params.id;
  }

}
