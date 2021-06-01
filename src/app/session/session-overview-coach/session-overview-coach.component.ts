import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoachingSession} from '../../model/coaching-session';
import {SessionService} from '../../services/session.service';
import {SessionStatus} from '../../model/session-status';


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
  title = 'Coachify | Session Overview';

  constructor(private route: ActivatedRoute, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    document.title = this.title;
    this.coachId = this.route.snapshot.params.id;
    this.getUpcomingSessions();
    this.getArchiveSessions();
    this.getFeedbackSessions();
  }

  getFeedbackSessions(): void {
    this.sessionService.getSessionsFeedbackCoach(this.coachId).subscribe(sessions => this.sessionsFeedback = sessions);
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
