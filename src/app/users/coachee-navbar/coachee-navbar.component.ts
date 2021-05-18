import {Component, OnInit} from '@angular/core';
import {Coachee} from '../../model/coachee';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coachee-navbar',
  templateUrl: './coachee-navbar.component.html',
  styleUrls: ['./coachee-navbar.component.css']
})
export class CoacheeNavbarComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

}
