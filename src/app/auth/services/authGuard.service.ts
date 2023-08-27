import { ɵɵinject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const guardServiceGuard: CanActivateFn = (route, state) => {
  const authService = ɵɵinject(AuthService);
  const router = ɵɵinject(Router)
  return authService.isLoggedIn$.pipe(map((isLoggedIn)=>{
    if(isLoggedIn){
        return true
    }
    router.navigateByUrl('/');
    return false
}))
}