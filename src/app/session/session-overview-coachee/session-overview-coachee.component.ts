import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {CoachingSession} from '../../model/coaching-session';

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

  constructor(private sessionService: SessionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.title = this.title;
    this.id = this.route.snapshot.params.id;
    this.getUpcomingSessions();
    this.getArchiveSessions();
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
    this.sessionService.getSessionsFeedbackCoachee(this.id).subscribe(sessions => this.sessionsFeedback = sessions);
  }

  statusCheck(session: CoachingSession): boolean {
    return session.status === 'Accepted' || session.status === 'Requested';
  }
}
