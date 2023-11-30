import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoadingIndicationService {

  private _state = new BehaviorSubject<boolean>(false);

  loading$ = this._state.asObservable();

  start() {
    this._state.next(true);
  }

  stop() {
    this._state.next(false);
  }
}
