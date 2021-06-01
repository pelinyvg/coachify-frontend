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
    // console.log(this.authserv.getUserId());
    this.id = this.authserv.getUserId();
    // this.coachService.getCoachIdbyCoacheeId(this.id).subscribe(cId => this.coachId = cId);
    this.coachId = this.route.snapshot.params.id;
    console.log('coach id : ' + this.coachId + '/ id : ' + this.id);
    if (this.router.url.indexOf('/coaches/')  === 0) {
      this.color = 'teal lighten-3';
    } else {
      this.color = 'yellow darken-2';
    }
  }

}
