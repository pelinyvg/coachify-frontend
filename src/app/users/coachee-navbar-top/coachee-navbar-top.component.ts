import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coachee-navbar-top',
  templateUrl: './coachee-navbar-top.component.html',
  styleUrls: ['./coachee-navbar-top.component.css']
})
export class CoacheeNavbarTopComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

}
