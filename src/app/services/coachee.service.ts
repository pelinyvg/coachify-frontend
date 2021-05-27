import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Coachee} from '../model/coachee';
import {ResetPassword} from '../model/reset-password';


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

  changePassword(resetPassword: ResetPassword): Observable<ResetPassword> {
    return this.http.post<ResetPassword>(`${environment.backendUrl}/users/reset-password`, resetPassword);
  }

  resetPasswordIdExist(resetPasswordId: string): Observable<boolean> {
    console.log(`${environment.backendUrl}/users/reset-password/${resetPasswordId}`);
    return this.http.get<boolean>(`${environment.backendUrl}/users/reset-password/${resetPasswordId}`);
  }

  createResetPasswordToken(email): Observable<boolean> {
    console.log('trying to send a password link to this email address :' + email);
    return this.http.post<boolean>(`${environment.backendUrl}/users/reset-password/create-token/${email}`, email);
  }
}
