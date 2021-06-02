import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Coach} from '../model/coach';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoachService {
  root = environment.backendUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.root + '/coaches');
  }

  getCoach(id: number): Observable<Coach> {
    return this.http.get<Coach>(this.root + `/coaches/${id}`);
  }

  getCoachIdbyCoacheeId(id: number): Observable<number> {
    return this.http.get<number>(this.root + `/users/${id}/coach`);
  }

  getTopics() {
    return this.http.get<string[]>(this.root + `/coaches/topicNames`);
  }

  changeProfile(id: number, updateCoachProfileForm: Coach): Observable<Coach> {
    return this.http.post<Coach>(this.root + `/coaches/${id}/coachInformation`, updateCoachProfileForm);
  }
}
