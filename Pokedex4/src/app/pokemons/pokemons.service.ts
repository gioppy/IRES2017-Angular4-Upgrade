import { IPokemonCard } from './pokemon-card/pokemon-card';
import { Type } from '../shared/type.model';

export class PokemonsService {
  constructor() { }
  get pokemons(): IPokemonCard[] {
    return [
      {
        pid: 1,
        number: 1,
        name: 'Bulbasaur',
        icon: 'https://api.pokedex.lab-web.it/sites/default/files/styles/card/public/repository/pokemon/artworks/1.png',
        types: [
          new Type(5, 'Erba', 'grass'),
          new Type(8, 'Veleno', 'poison')
        ]
      },
      {
        pid: 2,
        number: 2,
        name: 'Ivysaur',
        icon: 'https://api.pokedex.lab-web.it/sites/default/files/styles/card/public/repository/pokemon/artworks/2.png',
        types: [
          new Type(5, 'Erba', 'grass'),
          new Type(8, 'Veleno', 'poison')
        ]
      },
      {
        pid: 3,
        number: 3,
        name: 'Venusaur',
        icon: 'https://api.pokedex.lab-web.it/sites/default/files/styles/card/public/repository/pokemon/artworks/3.png',
        types: [
          new Type(5, 'Erba', 'grass'),
          new Type(8, 'Veleno', 'poison')
        ]
      }
    ];
  }
}
