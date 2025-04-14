import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authrizGuard: CanActivateFn = (route, state) => {
  const pLATFORM_ID=inject(PLATFORM_ID);
  if(isPlatformBrowser(pLATFORM_ID)){
    if(localStorage.getItem('token')!==null) {
      return true; // User is authenticated, so redirect to the login page
    }
    else{
      return false; // User is not authenticated, so allow access to the route
    }
  }

  return false;
};
