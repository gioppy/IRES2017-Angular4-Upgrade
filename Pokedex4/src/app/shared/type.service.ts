import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Type } from './type.model';

@Injectable()
export class TypeService {
  constructor(private http: Http) { }
  all(): Observable<Type[]> {
    return this.http.get('https://api.pokedex.lab-web.it/api/v1/types')
      .map(
        (result) => {
          return result.json();
        }
      )
      /*.do(
        (items) => {
          this.types = items;
        }
      )*/
  }
  weakness(pid: number): Observable<any> {
    return this.http.get(`https://api.pokedex.lab-web.it/api/v1/weakness?args[0]=${pid}`)
      .map(
        (result) => {
          return result.json();
        }
      )
  }
}
