import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
export const userauthGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
console.log("inside auth userauthGuard")

const userId = sessionStorage.getItem("ID");
  const isLoggedIn = sessionStorage.getItem("isLoggedin");
  
  
  console.log(isLoggedIn);
  console.log(userId);

  if(isLoggedIn == "true" && (userId != null)){


    return true;

  }
  _router.navigate(['/login']);
  return false;

 

};