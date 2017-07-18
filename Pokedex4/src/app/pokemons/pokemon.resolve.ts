import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';

@Injectable()
export class PokemonResolve implements Resolve<any> {
  constructor(private pokemonService: PokemonService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.pokemonService.get(route.params.id);
  }
}
