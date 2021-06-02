import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {InitService} from '../../materialize/init.service';

@Component({
  selector: 'app-coach-navbar-side',
  templateUrl: './coach-navbar-side.component.html',
  styleUrls: ['./coach-navbar-side.component.css']
})
export class CoachNavbarSideComponent implements OnInit, AfterViewInit {
  id: number;
  coachId: number;

  constructor(private route: ActivatedRoute,
              private authserv: AuthenticationService,
              private coachService: CoachService,
              private initService: InitService) {
  }

  ngOnInit(): void {
    this.id = this.authserv.getUserId();
    this.coachId = this.route.snapshot.params.id;
  }

  ngAfterViewInit(): void {
    this.initService.initSidenav();
  }

}
