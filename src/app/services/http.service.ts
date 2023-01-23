import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ContactModel } from '../contact/ContactModel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<ContactModel[]> {
    return this.http
      .get<ContactModel[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError((error) => throwError(() => new Error(error))));
  }
}
