import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoachingSession} from '../../model/coaching-session';
import {SessionService} from '../../services/session.service';


@Component({
  selector: 'app-session-overview-coach',
  templateUrl: './session-overview-coach.component.html',
  styleUrls: ['./session-overview-coach.component.css']
})
export class SessionOverviewCoachComponent implements OnInit {

  coachId: number;
  sessionsUpcoming: CoachingSession[];
  sessionsArchive: CoachingSession[];

  constructor(private route: ActivatedRoute, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.coachId = this.route.snapshot.params.id;
    this.getUpcomingSessions();
    this.getArchiveSessions();
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
}
