import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GetUserDetails } from './../../shared/action/account.action';
import { SetAuthEmail } from './../../shared/action/auth.action';
import { AuthService } from './../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private store: Store,
    private router: Router,
    private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    this.authService.redirectUrl = state.url;

    if (!this.store.selectSnapshot((s: any) => s.auth && s.auth.access_token)) {
      return of(this.router.createUrlTree(['/auth/login']));
    }

    return this.store.dispatch(new GetUserDetails()).pipe(
      map(() => {
        const user = this.store.selectSnapshot((s: any) => s.account?.user);
        if (user && !user.email_verified_at) {
          this.store.dispatch(new SetAuthEmail(user.email));
          return this.router.createUrlTree(['/auth/verify-registration-otp']);
        }
        return true;
      }),
      catchError(() => of(true as boolean | UrlTree))
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (!!this.store.selectSnapshot((s: any) => s.auth && s.auth.access_token)) {
      if (this.router.url.startsWith('/account') || this.router.url == '/checkout' || this.router.url == '/compare')
        this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}