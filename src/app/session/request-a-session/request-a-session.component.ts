import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SessionService} from '../../services/session.service';
import {CoachService} from '../../services/coach.service';
import {CoacheeService} from '../../services/coachee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-request-a-session',
  templateUrl: './request-a-session.component.html',
  styleUrls: ['./request-a-session.component.css']
})
export class RequestASessionComponent implements OnInit {

  minDate: Date;

  sessionForm = this.formBuilder.group(
    {
      subject: '',
      date: '',
      time: '',
      location: '',
      remarks: '',
      coachId: this.route.snapshot.params.idcoach,
      coacheeId: this.route.snapshot.params.id
    });

  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              private coachService: CoachService,
              private coacheeService: CoacheeService,
              private route: ActivatedRoute) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();
    console.log(currentYear);
    console.log(currentMonth);
    console.log(currentDay);
    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.sessionService.addSession(this.sessionForm.value).subscribe(session => console.log(session));
  }
}
