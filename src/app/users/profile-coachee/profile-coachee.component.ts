import {Component, OnInit} from '@angular/core';
import {Coachee} from '../../model/coachee';
import {ActivatedRoute, Router} from '@angular/router';
import {CoacheeService} from '../../services/coachee.service';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-profile-coachee',
  templateUrl: './profile-coachee.component.html',
  styleUrls: ['./profile-coachee.component.css']
})
export class ProfileCoacheeComponent implements OnInit {

  title: string;
  coachee: Coachee;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: CoacheeService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    // tslint:disable-next-line:triple-equals
    if (this.authenticationService.getUserId() == this.id || this.authenticationService.isAdmin()) {
      this.getUser(this.id);
    } else {
      this.router.navigate([`coachees/${this.authenticationService.getUserId()}/not-authorized`]);
    }
  }

  getUser(id: number): void {
    this.service.getUser(id).subscribe(
      coachee => {
        this.coachee = coachee;
        this.title = 'Coachify | ' + this.coachee.firstName + ' ' + this.coachee.lastName;
        document.title = this.title;
      }
    );
  }


  toOutputString(): string {
    if (!this.coachee) {
      return '';
    }
    let output = '';

    const array = this.coachee?.authorities;
    for (const authority of array) {
      output += this.toLowerCase(authority) + ', ';
    }
    return output.substr(0, output.length - 2);
  }

  toLowerCase(authority: string): string {
    switch (authority) {
      case 'COACH':
        return 'Coach';
      case 'COACHEE':
        return 'Coachee';
      case 'ADMIN':
        return 'Admin';
    }
  }
}
