import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  espiresIn: string;
  localId: string;

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
    );
  }
}
