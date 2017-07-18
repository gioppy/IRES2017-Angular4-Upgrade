import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IMove } from '../../shared/move';

@Injectable()
export class MoveService {
  constructor(private http: Http) { }
  indexLv(pid: number): Observable<IMove[]> {
    return this.http.get(`https://api.pokedex.lab-web.it/api/v1/pokemon_moves?args[0]=${pid}`)
      .map(
        (result) => {
          return result.json();
        }
      )
  }
  indexMtmn(pid: number): Observable<IMove[]> {
    return this.http.get(`https://api.pokedex.lab-web.it/api/v1/pokemon_mtmn?args[0]=${pid}`)
      .map(
        (result) => {
          return result.json();
        }
      )
  }
}
