import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private url = `${environment.backendUrl}/hello-world`;

  constructor(private http: HttpClient) {
  }

  getMessage(): Observable<string> {
    return this.http.get(this.url, {responseType: 'text'}).pipe(
      catchError(this.handleError('hello-world'))
    );
  }

  private handleError(operation = 'operation') {
    return (error: any) => {
      console.error(error);
      return throwError(error);
    };
  }
}
