import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SessionService} from '../../services/session.service';
import {CoachService} from '../../services/coach.service';
import {CoacheeService} from '../../services/coachee.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe, Location} from '@angular/common';

@Component({
  selector: 'app-request-a-session',
  templateUrl: './request-a-session.component.html',
  styleUrls: ['./request-a-session.component.css']
})
export class RequestASessionComponent implements OnInit {

  currentDate: Date = new Date();
  minDate: Date;
  timeCorrect = true;
  title = 'Coachify | Create Session';

  sessionForm = this.formBuilder.group(
    {
      subject: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      location: ['', [Validators.required]],
      remarks: '',
      coachId: this.route.snapshot.params.idcoach,
      coacheeId: this.route.snapshot.params.id
    });

  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              private coachService: CoachService,
              private coacheeService: CoacheeService,
              private route: ActivatedRoute,
              private location: Location) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    document.title = this.title;
    console.log(this.minDate);
  }

  onSubmit(): void {
    const datepipe: DatePipe = new DatePipe('en-US');
    const currentDate = datepipe.transform(this.currentDate, 'yyyy-MM-dd');
    const formDate = datepipe.transform(this.sessionForm.value.date, 'yyyy-MM-dd');

    const currentTime = datepipe.transform(this.currentDate, 'HH:mm');

    if (formDate > currentDate || (formDate === currentDate && this.sessionForm.value.time > currentTime)) {
      this.sessionService.addSession(this.sessionForm.value).subscribe(() => {
        console.log(this.sessionForm.value.date);
        this.location.back();
      });
    } else {
      this.timeCorrect = false;
    }
  }
}
