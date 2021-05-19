import {Injectable} from '@angular/core';
import {CoachingSession} from '../model/coaching-session';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private route = `${environment.backendUrl}/sessions`;

  constructor(private http: HttpClient) {
  }

  addSession(coachingSession: CoachingSession): Observable<CoachingSession> {
    console.log(coachingSession);
    return this.http.post<CoachingSession>(this.route, coachingSession);
  }
}
