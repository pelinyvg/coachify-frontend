import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Coach} from '../model/coach';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  root = `${environment.backendUrl}/coaches`;

  constructor(private http: HttpClient) {
  }

  getCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.root);
  }

  getCoach(id: number): Observable<Coach> {
    return this.http.get<Coach>(this.root + `/${id}`);
  }

  getTopics() {
    return this.http.get<string[]>(this.root + `/topicNames`);
  }
}
