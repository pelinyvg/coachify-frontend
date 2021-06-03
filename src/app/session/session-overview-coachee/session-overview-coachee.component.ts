import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {CoachingSession} from '../../model/coaching-session';
import {FormBuilder, Validators} from '@angular/forms';
import {SessionStatus} from '../../model/session-status';

@Component({
  selector: 'app-session-overview-coachee',
  templateUrl: './session-overview-coachee.component.html',
  styleUrls: ['./session-overview-coachee.component.css']
})
export class SessionOverviewCoacheeComponent implements OnInit {

  title = 'Coachify | Session Overview';
  id: number;
  sessions: CoachingSession[];
  sessionsUpcoming: CoachingSession[];
  sessionsArchive: CoachingSession[];
  sessionsFeedback: CoachingSession[];
  sessionStatus: SessionStatus;
  showFeedbackForm: boolean;
  feedbackIsGivenByCoachee: boolean;


  feedBackForm = this.formBuilder.group(
    {
      sessionId: [''],
      explanationRating: ['', [Validators.required]],
      usefulRating: ['', [Validators.required]],
      comment1: [''],
      comment2: [''],
    });

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.showFeedbackForm = false;
  }

  ngOnInit(): void {
    document.title = this.title;
    this.id = this.route.snapshot.params.id;
    this.getUpcomingSessions();
    this.getArchiveSessions();
    this.getFeedbackSessions();
  }

  giveFeedBack(session: CoachingSession): void {
    // this.showFeedbackForm = this.showFeedbackForm !== true;
    session.editForm = session.editForm === false;
  }

  getUpcomingSessions(): void {
    this.sessionService.getSessionsUpcomingCoachee(this.id).subscribe(
      sessions => {
        this.sessionsUpcoming = sessions;
      }
    );
  }

  getArchiveSessions(): void {
    this.sessionService.getSessionsArchiveCoachee(this.id).subscribe(
      sessions => {
        this.sessionsArchive = sessions;
      }
    );
  }

  getFeedbackSessions(): void {
    this.sessionService.getSessionsFeedbackCoachee(this.id).subscribe(sessions => {
      sessions.map((session) => session.editForm = false);
      this.sessionsFeedback = sessions;
    });
  }

  statusCheck(session: CoachingSession): boolean {
    return session.status === 'Accepted' || session.status === 'Requested';
  }

  cancelAcceptedSession(coachingSession: CoachingSession) {
    this.sessionStatus = {status: 'Finished (Cancelled by coachee)', id: coachingSession.sessionId};
    this.sessionService.setStatusOfSession(this.sessionStatus).subscribe(() => this.ngOnInit());
  }

  onSubmit(sessionId: number) {
    this.feedBackForm.controls.sessionId.setValue(sessionId);
    this.sessionService.addSessionFeedback(this.feedBackForm.value).subscribe(() => window.location.reload());
  }

  hasFeedbackOfCoachee(coachingSession: CoachingSession) {
    // console.log(coachingSession.sessionFeedbackCoacheeDTO.sessionId);
    // console.log(coachingSession.sessionFeedbackCoacheeDTO.usefulRating);
    // console.log(coachingSession.sessionFeedbackCoacheeDTO.explanationRating);
    // console.log(coachingSession.sessionFeedbackCoacheeDTO);
    return coachingSession.sessionFeedbackCoacheeDTO.sessionFeedbackCoacheeId === null;
  }
}
