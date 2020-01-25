import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class PostResolverService implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const url = environment.SERVER_URL + 'posts';
    return this.http.get(url).pipe(catchError(error   => {
       return EMPTY;
    }), mergeMap(something => {
          if (something) {
             return of(something);
          } else {
             return EMPTY;
          }
        })
      );
    }
}
