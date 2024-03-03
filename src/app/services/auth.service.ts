import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken() {
    return !!localStorage.getItem('raw');
  }
  
  authData(id: any, token: string) {
    localStorage.setItem("userId", id);
    localStorage.setItem("raw", token);
  }
}

/* Structure of a Session Storage (by array)

[0] User Email/ID (Must be encrypted) 
[1] Auth Key (Must be encrypted)
[2] Token (For Request Authentication; must return 401 if invalid)

*/