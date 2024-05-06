import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const esteLogat = this.authService.esteUtilizatorLogatSync;
    if (esteLogat === false) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return esteLogat;
    }

    return true;
  }
}