import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private root = `${environment.backendUrl}/users`;

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.root, user);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.root}/${id}`);
  }
}
