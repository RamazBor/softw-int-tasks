import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const key = '3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f'
  if (key) {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'f5cfbf58e2mshec477710fcc6638p1e42d9jsn8bb9b64619cf',
		'x-rapidapi-host': 'imdb_api4.p.rapidapi.com'
      }
    });
  }
  return next(req);
};
