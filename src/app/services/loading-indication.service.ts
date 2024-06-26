import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  of,
  tap,
  concatMap,
  finalize,
  delay,
} from 'rxjs';

@Injectable()
export class LoadingIndicationService {

  private _state = new BehaviorSubject<boolean>(false);

  loading$ = this._state.asObservable();

  // TODO: Add injectable configs
  show<T>(process$: Observable<T>): Observable<T> {
    return of(null).pipe(
      delay(0), // quick fix of the error https://angular.io/errors/NG0100
      tap(() => this._state.next(true)), // show an indicator before loading starts
      concatMap(() => process$), // add awaitable process
      delay(300), // minimum time to make an indicator noticeable by user
      tap(() => this._state.next(false)), // hide an indicator in the end
      finalize(() => this._state.next(false)), // do the same either on complete, error or unsubscribe
    );
  }
}
