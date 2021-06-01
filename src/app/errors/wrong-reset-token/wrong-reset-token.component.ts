import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wrong-reset-token',
  templateUrl: './wrong-reset-token.component.html',
  styleUrls: ['./wrong-reset-token.component.css']
})
export class WrongResetTokenComponent implements OnInit {

  title = 'Coachify | Wrong token';

  constructor() {
  }

  ngOnInit(): void {
    document.title = this.title;
  }

}
