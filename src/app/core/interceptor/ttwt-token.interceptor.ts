import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

export const ttwtTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(GlobalServiceService);
  const token = (localStorage.getItem('loginToken'));
  
  //  let currentUser = authService.currentUserValue;
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
  return next(req);
};
