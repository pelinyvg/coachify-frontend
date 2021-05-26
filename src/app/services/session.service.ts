import {Injectable} from '@angular/core';
import {CoachingSession} from '../model/coaching-session';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {filter, map} from 'rxjs/operators';
import {response} from 'express';
import {DatePipe} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentDate: Date = new Date();

  private route = environment.backendUrl;

  constructor(private http: HttpClient) {
  }

  addSession(coachingSession: CoachingSession): Observable<CoachingSession> {
    console.log(coachingSession);
    return this.http.post<CoachingSession>(`${this.route}/sessions`, coachingSession);
  }

  getSessions(id: number): Observable<CoachingSession[]> {
    console.log(`${this.route}/coachee/${id}`);
    return this.http.get<CoachingSession[]>(`${this.route}/coachees/${id}/sessions`);
  }

  getSessionsUpcoming(id: number): Observable<CoachingSession[]> {
    const datepipe: DatePipe = new DatePipe('en-US');

    const currentDate = datepipe.transform(this.currentDate, 'yyyy-MM-dd');
    console.log(currentDate);
    return this.http.get<CoachingSession[]>(`${this.route}/coachees/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(
          s => datepipe.transform(s.date, 'yyyy-MM-dd') >= currentDate
          )
        )
      );
  }

  getSessionsArchive(id: number): Observable<CoachingSession[]> {
    const datepipe: DatePipe = new DatePipe('en-US');

    const currentDate = datepipe.transform(this.currentDate, 'yyyy-MM-dd');
    console.log(currentDate);
    return this.http.get<CoachingSession[]>(`${this.route}/coachees/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(
          s => datepipe.transform(s.date, 'yyyy-MM-dd') < currentDate
          )
        )
      );
  }
}
