import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { IPokemon } from '../pokemons/pokemon/pokemon';

@Injectable()
export class PokemonService {
  private minDex = 0;
  private maxDex = 151;
  constructor(private http: Http) { }

  get(id: number): Observable<IPokemon> {
    return this.http
      .get(`http://api.pokedex.lab-web.it/api/v1/pokemon?args[0]=${id}`)
      .map(
        (response: Response) => {
          const item = response.json();
          return item[0];
        }
      )
  }

  getIcon(id: number): Observable<any> {
    return this.http
      .get(`http://api.pokedex.lab-web.it/api/v1/pokemon-nav?args[0]=${id}`)
      .map(
        (response: Response) => {
          const item = response.json();
          return item[0];
        }
      )
  }

  getMin(): number {
    return this.minDex;
  }

  getMax(): number {
    return this.maxDex;
  }
}
