import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const notAuthrizGuard: CanActivateFn = (route, state) => {
  const pLATFORM_ID=inject(PLATFORM_ID);
  const router=inject(Router);
  if(isPlatformBrowser(pLATFORM_ID)){
    if(localStorage.getItem('token')!==null) {
      router.navigate(['/blank']); // User is authenticated, so redirect to the login page
      return false; 
    }
    else{
      return true; 
    }
  }
  else{
    return false; // User is not authenticated, so allow access to the route
  }
};
