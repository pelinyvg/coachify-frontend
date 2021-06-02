import {Component, OnInit} from '@angular/core';
import {Coach} from '../../model/coach';
import {ActivatedRoute, Router} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-profile-coach',
  templateUrl: './profile-coach.component.html',
  styleUrls: ['./profile-coach.component.css']
})
export class ProfileCoachComponent implements OnInit {

  title: string;
  coach: Coach;
  openEdit = false;
  coachId: number;

  constructor(
    private route: ActivatedRoute,
    private service: CoachService,
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.getCoachIdbyCoacheeId(this.authService.getUserId()).subscribe(
      id => {
        this.coachId = id;
        console.log(this.coachId);
        console.log(this.route.snapshot.params.id);
        // tslint:disable-next-line:triple-equals
        if (this.route.snapshot.params.id == this.coachId || this.authService.isAdmin()) {
          this.getCoach();
        } else {
          this.router.navigate([`coachees/${this.authService.getUserId()}/not-authorized`]);
        }
      }
    );
  }

  getCoach(): void {
    this.service.getCoach(this.route.snapshot.params.id).subscribe(coach => {
      this.coach = coach;
      this.title = 'Coachify | ' + this.coach.firstName + ' ' + this.coach.lastName;
      document.title = this.title;
    });
  }

  clickEdit() {
    this.openEdit = !this.openEdit;
  }
}
