import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  constructor(
    private router: Router
  ) { }

  getUser() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return user;
  }

  setUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  clearUser() {
    sessionStorage.removeItem('currentUser');
  }

  isAuthenticated() {
    if (this.getUser() != null) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
    this.clearUser();
    this.router.navigate(['/login']);
  }
}
