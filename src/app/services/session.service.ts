import {Injectable} from '@angular/core';
import {CoachingSession} from '../model/coaching-session';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {DatePipe} from '@angular/common';
import {SessionStatus} from '../model/session-status';
import {response} from 'express';
import {SessionFeedbackCoachee} from '../model/session-feedback-coachee';
import {SessionFeedbackCoach} from "../model/session-feedback-coach";


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

  getSessionsUpcomingCoachee(id: number): Observable<CoachingSession[]> {
    const datepipe: DatePipe = new DatePipe('en-US');
    const currentDate = datepipe.transform(this.currentDate, 'yyyy-MM-dd HH:mm:ss');

    return this.http.get<CoachingSession[]>(`${this.route}/coachees/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(
          s => datepipe.transform(new Date(s.date + ' ' + s.time), 'yyyy-MM-dd HH:mm:ss') >= currentDate
        )));
  }

  getSessionsArchiveCoachee(id: number): Observable<CoachingSession[]> {
    const datepipe: DatePipe = new DatePipe('en-US');
    const currentDate = datepipe.transform(this.currentDate, 'yyyy-MM-dd HH:mm:ss');

    return this.http.get<CoachingSession[]>(`${this.route}/coachees/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(
          s => datepipe.transform(new Date(s.date + ' ' + s.time), 'yyyy-MM-dd HH:mm:ss') < currentDate)),
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(s => s.status !== 'Done, Waiting Feedback'))
      );
  }

  getSessionsFeedbackCoachee(id: number) {
    return this.http.get<CoachingSession[]>(`${this.route}/coachees/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(s => s.status.toLowerCase().includes('feedback')))
        // // tslint:disable-next-line:no-shadowed-variable
        // map(response => console.log(response))
      )
      ;
  }

  getSessionsUpcomingCoach(id: number): Observable<CoachingSession[]> {
    const dateTimePipe: DatePipe = new DatePipe('en-US');
    const currentDateTime = dateTimePipe.transform(this.currentDate, 'yyyy-MM-dd HH:mm:ss');

    return this.http.get<CoachingSession[]>(`${this.route}/coaches/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(s =>
          dateTimePipe.transform(new Date(s.date + ' ' + s.time), 'yyyy-MM-dd HH:mm:ss') >= currentDateTime))
      );
  }

  // map(response => response.filter(s => s.status.toLowerCase().includes('feedback')))
  getSessionsArchiveCoach(id: number): Observable<CoachingSession[]> {
    const datepipe: DatePipe = new DatePipe('en-US');
    const currentDate = datepipe.transform(this.currentDate, 'yyyy-MM-dd HH:mm:ss');

    console.log(currentDate);
    return this.http.get<CoachingSession[]>(`${this.route}/coaches/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(
          s => datepipe.transform(new Date(s.date + ' ' + s.time), 'yyyy-MM-dd HH:mm:ss') < currentDate)),
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(s => s.status !== 'Done, Waiting Feedback'))
      );
  }

  setStatusOfSession(sessionStatus: SessionStatus): Observable<CoachingSession> {
    return this.http.post<CoachingSession>(this.route + `/sessions/${sessionStatus.id}/set-status`, sessionStatus);
  }

  getSessionsFeedbackCoach(id: number) {
    return this.http.get<CoachingSession[]>(`${this.route}/coaches/${id}/sessions`)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(response => response.filter(s => s.status.toLowerCase().includes('feedback'))));
  }

  addSessionFeedbackOfCoachee(sessionFeedBack: SessionFeedbackCoachee): Observable<SessionFeedbackCoachee> {
    return this.http.post<SessionFeedbackCoachee>(`${this.route}/sessions/${sessionFeedBack.sessionId}/feedback-coachee`, sessionFeedBack);
  }
  addSessionFeedbackOfCoach(sessionFeedBack: SessionFeedbackCoach): Observable<SessionFeedbackCoach> {
    return this.http.post<SessionFeedbackCoach>(`${this.route}/sessions/${sessionFeedBack.sessionId}/feedback-coach`, sessionFeedBack);
  }
}
