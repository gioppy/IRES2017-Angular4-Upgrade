import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Ability } from './ability';

@Injectable()
export class AbilityService {
  constructor(private http: Http) {}
  get(id: number): Observable<Ability> {
    return this.http
      .get(`http://api.pokedex.lab-web.it/api/v1/ability?args[0]=${id}`)
      .map(
        (response: Response) => {
          const items = response.json();
          return items[0];
        }
      )
  }
}
