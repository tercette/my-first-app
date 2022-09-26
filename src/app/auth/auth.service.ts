import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  espiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJnZQahGdLOZUKTZvgvTYEI3oe0Hj7-GI',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMessage = "An unknow error occurred!"
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
      }
      return throwError(errorMessage);
    })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJnZQahGdLOZUKTZvgvTYEI3oe0Hj7-GI',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  }
}
