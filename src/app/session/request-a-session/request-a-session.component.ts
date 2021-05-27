import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SessionService} from '../../services/session.service';
import {CoachService} from '../../services/coach.service';
import {CoacheeService} from '../../services/coachee.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-request-a-session',
  templateUrl: './request-a-session.component.html',
  styleUrls: ['./request-a-session.component.css']
})
export class RequestASessionComponent implements OnInit {

  minDate: Date;

  sessionForm = this.formBuilder.group(
    {
      subject: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      location: ['', [Validators.required]],
      remarks: '',
      coachId: this.route.snapshot.params.idcoach,
      coacheeId: this.route.snapshot.params.id,
      status: 'Requested'
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
  }

  onSubmit(): void {
    this.sessionService.addSession(this.sessionForm.value).subscribe(() => {
      this.location.back();
    });
  }
}
