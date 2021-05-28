import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {filter} from 'rxjs/operators';
import {InitService} from '../materialize/init.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, AfterViewInit {
  username;
  language = 'en';
  isCoach: boolean;

  constructor(public authenticationService: AuthenticationService,
              private translate: TranslateService,
              private initService: InitService,
              private router: Router
  ) {
    this.isCoach = false;
  }

  ngOnInit(): void {
    // this.translate.use(this.translate.getBrowserLang());

    if (this.authenticationService.getUserId()) {
      this.username = this.authenticationService.getUsername();
    }

    this.authenticationService.userLoggedIn$
      .pipe(
        filter(loggedIn => loggedIn === true),
      )
      .subscribe(profile => this.username = this.authenticationService.getUsername());
    setTimeout(() => { this.ngOnInit() }, 100)
    if (this.router.url.indexOf('/coaches/')  === 0) {
      this.isCoach = true;
    } else {
      this.isCoach = false;
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.initService.initDropdowns();
    this.initService.initSidenav();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }

  currentLanguage() {
    return this.language;
  }

  logout() {
    this.authenticationService.logout();
  }

}
