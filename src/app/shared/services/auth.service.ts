import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router) { }

  logIn(login: string, password: string) {
    window.localStorage.setItem('isLoggedIn', 'true');
    window.localStorage.setItem('email', login);
    this.router.navigate(['/']);
  }

  register(email: string, password: string, name: string, surname: string, phone: string) {
    // actually there is no register process... but just a mocking :)
    window.localStorage.setItem('isLoggedIn', 'true');
    window.localStorage.setItem('email', email);
    this.router.navigate(['/']);
  }

  logOut() {
    window.localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login-form']);
  }

  get isLoggedIn() {
    return window.localStorage.getItem('isLoggedIn') == 'true';
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn;
    const isLoginForm = route.routeConfig.path === 'login-form';

    if (isLoggedIn && isLoginForm) {
      this.router.navigate(['/']);
      return false;
    }

    if (!isLoggedIn && (!isLoginForm)) {
      this.router.navigate(['/login-form']);
    }

    return isLoggedIn || isLoginForm;
  }
}

@Injectable()
export class RegisterGuardService implements CanActivate {

  // I have did it like that because, when I add register form checking to AuthGuard
  // the application freezes, I cannot solve that so I went in that way.

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn;
    const isRegisterForm = route.routeConfig.path === 'register-form';

    if (isLoggedIn && isRegisterForm) {
      this.router.navigate(['/']);
      return false;
    }

    if (!isLoggedIn && (!isRegisterForm)) {
      this.router.navigate(['/register-form']);
    }

    return isLoggedIn || isRegisterForm;
  }
}

