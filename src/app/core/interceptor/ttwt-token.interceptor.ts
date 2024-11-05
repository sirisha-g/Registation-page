import { HttpInterceptorFn } from '@angular/common/http';

export const ttwtTokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  return next(req);
};
