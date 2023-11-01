import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../shared/service/user-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const userService: UserServiceService = inject(UserServiceService);

  const isLoggedIn: boolean = userService.getLoggedIn();

  let token = userService.getToken();;

  if (!isLoggedIn || !token || token.length === 0) {
    const router = inject(Router);
    router.navigate(['login']);
    return false;
  }


  return true;
};
