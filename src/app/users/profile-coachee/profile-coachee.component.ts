import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-coachee',
  templateUrl: './profile-coachee.component.html',
  styleUrls: ['./profile-coachee.component.css']
})
export class ProfileCoacheeComponent implements OnInit {

  private coachee: User;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id: number): void {
    this.service.getUser(id).subscribe(coachee => this.coachee = coachee);
  }

}
