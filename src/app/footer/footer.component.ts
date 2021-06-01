import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  color: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.color = 'yellow darken-2';
  }

  ngOnInit(): void {
    setTimeout(() => { this.ngOnInit(); }, 100);
    if (this.router.url.indexOf('/coaches/')  === 0) {
      this.color = 'teal lighten-3';
    } else {
      this.color = 'yellow darken-2';
    }
  }
}
