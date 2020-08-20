import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private router: Router) { }

  logIn(login: string, password: string) {
    this.loggedIn = true;
    window.localStorage.setItem('isLoggedIn', 'true');
    window.localStorage.setItem('email', login);
    this.router.navigate(['/']);
  }

  logOut() {
    this.loggedIn = false;
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

    if (isLoggedIn && isLoginForm ) {
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
  constructor(private router: Router, private authService: AuthService) { 
    
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn;
    const isRegisterForm = route.routeConfig.path === 'register-form';

    if (isLoggedIn && isRegisterForm ) {
      this.router.navigate(['/']);
      return false;
    }

    if (!isLoggedIn && (!isRegisterForm)) {
      this.router.navigate(['/register-form']);
    }

    return isLoggedIn || isRegisterForm;
  }
}

