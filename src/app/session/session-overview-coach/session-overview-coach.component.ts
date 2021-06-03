import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoachingSession} from '../../model/coaching-session';
import {SessionService} from '../../services/session.service';
import {SessionStatus} from '../../model/session-status';
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-session-overview-coach',
  templateUrl: './session-overview-coach.component.html',
  styleUrls: ['./session-overview-coach.component.css']
})
export class SessionOverviewCoachComponent implements OnInit {

  coachId: number;
  sessionsUpcoming: CoachingSession[];
  sessionsArchive: CoachingSession[];
  sessionsFeedback: CoachingSession[];
  sessionStatus: SessionStatus;
  showFeedbackForm: boolean;
  feedbackIsGivenByCoach: boolean;
  title = 'Coachify | Session Overview';

  feedBackForm = this.formBuilder.group(
    {
      sessionId: [''],
      rating1: ['', [Validators.required]],
      rating2: ['', [Validators.required]],
      comment1: [''],
      comment2: [''],
    });

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    document.title = this.title;
    this.coachId = this.route.snapshot.params.id;
    this.getUpcomingSessions();
    this.getArchiveSessions();
    this.getFeedbackSessions();
  }

  giveFeedBack(session: CoachingSession): void {
    // this.showFeedbackForm = this.showFeedbackForm !== true;
    session.editFormCoach = session.editFormCoach === false;
  }

  getFeedbackSessions(): void {
    this.sessionService.getSessionsFeedbackCoach(this.coachId).subscribe(sessions => {
      sessions.map((session) => session.editFormCoach = false);
      this.sessionsFeedback = sessions;
    });
  }

  getUpcomingSessions(): void {
    this.sessionService.getSessionsUpcomingCoach(this.coachId).subscribe(
      sessions => {
        this.sessionsUpcoming = sessions;
      }
    );
  }

  getArchiveSessions(): void {
    this.sessionService.getSessionsArchiveCoach(this.coachId).subscribe(
      sessions => {
        this.sessionsArchive = sessions;
      }
    );
  }

  statusAccepted(session: CoachingSession): boolean {
    return session.status === 'Accepted';
  }

  statusRequested(session: CoachingSession): boolean {
    return session.status === 'Requested';
  }

  onSubmit(sessionId: number) {
    this.feedBackForm.controls.sessionId.setValue(sessionId);
    this.sessionService.addSessionFeedbackOfCoach(this.feedBackForm.value).subscribe(() => window.location.reload());
  }

  hasFeedbackOfCoach(coachingSession: CoachingSession) {
    return coachingSession.sessionFeedbackCoachDTO.sessionFeedbackCoachId === null;
  }

  cancelFeedBackForm(coachingSession: CoachingSession) {
    this.feedBackForm.reset();
    coachingSession.editFormCoach = false;
  }

  acceptRequestedSession(session: CoachingSession) {
    this.sessionStatus = {status: 'Accepted', id: session.sessionId};
    this.sessionService.setStatusOfSession(this.sessionStatus).subscribe(() => this.ngOnInit());
  }

  declineRequestedSession(session: CoachingSession) {
    this.sessionStatus = {status: 'Finished (declined)', id: session.sessionId};
    this.sessionService.setStatusOfSession(this.sessionStatus).subscribe(() => this.ngOnInit());
  }

  cancelAcceptedSession(session: CoachingSession) {
    this.sessionStatus = {status: 'Finished (Cancelled by coach)', id: session.sessionId};
    this.sessionService.setStatusOfSession(this.sessionStatus).subscribe(() => this.ngOnInit());
  }
}
