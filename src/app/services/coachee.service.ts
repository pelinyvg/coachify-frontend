import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Coachee} from '../model/coachee';
import {ResetPassword} from "../model/reset-password";

@Injectable({
  providedIn: 'root'
})
export class CoacheeService {

  private root = `${environment.backendUrl}/security/account`;

  constructor(private http: HttpClient) {
  }

  addCoachee(user: Coachee): Observable<Coachee> {
    return this.http.post<Coachee>(this.root, user);
  }

  getUser(id: number): Observable<Coachee> {
    return this.http.get<Coachee>(`${environment.backendUrl}/users/${id}`);
  }

  resetPasswordIdExist(resetPasswordId: string): Observable<Boolean> {
    return this.http.get<Boolean>(`${environment.backendUrl}/users/reset-password/${resetPasswordId}`);
  }

  changePassword(resetPassword: ResetPassword): Observable<ResetPassword> {
    return this.http.post<ResetPassword>(`${environment.backendUrl}/users/reset-password`, resetPassword);
  }
}
