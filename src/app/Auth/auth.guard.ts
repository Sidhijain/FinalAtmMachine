import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);

  const isAdminLoggedIn = sessionStorage.getItem('isAdminLoggedIn');

  const adminId = sessionStorage.getItem('ID');

 console.log(isAdminLoggedIn);  console.log(adminId);

   if(isAdminLoggedIn == "true" && (adminId == "admin1")){


    return true;

  }

  _router.navigate(['login']);
  return false;

};