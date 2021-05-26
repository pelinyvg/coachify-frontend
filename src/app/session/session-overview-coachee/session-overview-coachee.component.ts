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

  id: number;
  sessions: CoachingSession[];
  sessionsUpcoming: CoachingSession[];
  sessionsArchive: CoachingSession[];

  constructor(private sessionService: SessionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUpcomingSessions();
    this.getArchiveSessions();
  }

  getUpcomingSessions(): void {
    this.sessionService.getSessionsUpcoming(this.id).subscribe(
      sessions => {
        this.sessionsUpcoming = sessions;
        console.log(this.sessionsUpcoming);
      }
    );
  }

  getArchiveSessions(): void {
    this.sessionService.getSessionsArchive(this.id).subscribe(
      sessions => {
        this.sessionsArchive = sessions;
        console.log(this.sessionsArchive);
      }
    );
  }

}
