import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-coach-navbar-side',
  templateUrl: './coach-navbar-side.component.html',
  styleUrls: ['./coach-navbar-side.component.css']
})
export class CoachNavbarSideComponent implements OnInit {
  id: number;
  coachId: number;

  constructor(private route: ActivatedRoute, private authserv: AuthenticationService, private coachService: CoachService) {
  }

  ngOnInit(): void {
    // console.log(this.authserv.getUserId());
    this.id = this.authserv.getUserId();
    // this.coachService.getCoachIdbyCoacheeId(this.id).subscribe(cId => this.coachId = cId);
    this.coachId = this.route.snapshot.params.id;
    console.log('coach id : ' + this.coachId + '/ id : ' + this.id);
  }

}
