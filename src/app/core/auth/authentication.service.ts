import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  serviceUrl = 'https://reqres.in/api/login';
  token: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  private handleError() {
    return throwError(
      'Something bad happened; please try again later.');
  }

  loginUser(username: string, password: string) {
    return this.httpClient.post<string>(this.serviceUrl, {
      'email': username,
      'password': password
    }).pipe(
      catchError(this.handleError),
      tap((token) => {
        this.token = token;
        this.router.navigate(['/users']);
      })
    );
  }

  logoutUser() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
