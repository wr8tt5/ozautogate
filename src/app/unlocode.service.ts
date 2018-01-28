import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { COUNTRIES, STATES, States } from './unlocode';

@Injectable()
export class UnlocodeService {

  constructor() { }

  getCountries(): Observable<string[]> {
    return of(COUNTRIES);
  }

  getStates(): Observable<States> {
    return of(STATES);
  }
}
