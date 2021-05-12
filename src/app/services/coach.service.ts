import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Coach} from '../users/coach';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  root = `${environment.backendUrl}/coaches`;

  constructor(private http: HttpClient) { }

  getCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.root);
  }
}
