import { Component, OnInit } from '@angular/core';
import {Coachee} from '../../model/coachee';
import {ActivatedRoute, Router} from '@angular/router';
import {CoacheeService} from '../../services/coachee.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile-coachee',
  templateUrl: './profile-coachee.component.html',
  styleUrls: ['./profile-coachee.component.css']
})
export class ProfileCoacheeComponent implements OnInit {

  coachee: Coachee;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: CoacheeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUser(this.id);
  }

  getUser(id: number): void {
    this.service.getUser(id).subscribe(coachee => this.coachee = coachee);
  }

}
