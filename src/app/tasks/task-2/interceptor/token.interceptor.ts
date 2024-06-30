import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const key = 'f5cfbf58e2mshec477710fcc6638p1e42d9jsn8bb9b64619cf';
  if (key) {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': `${key}`,
        'x-rapidapi-host': 'imdb_api4.p.rapidapi.com',
      },
    });
  }
  return next(req);
};
