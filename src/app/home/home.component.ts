import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitService} from '../materialize/init.service';
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private id: number;

  constructor(
    private initService: InitService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.id = this.authenticationService.getUserId();
      this.router.navigateByUrl(`/coachees/${this.id}/profile-coachee`);
    }
  }

  ngAfterViewInit(): void {
    this.initService.initParalax();
  }
}
