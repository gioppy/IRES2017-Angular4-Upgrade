import { Component, OnInit } from '@angular/core';

import { IPokemonCard } from './pokemon-card/pokemon-card';
import { PokemonsService } from './pokemons.service';
import { Type } from '../shared/type.model';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  providers: [PokemonsService]
})
export class PokemonsComponent implements OnInit {
  pokemons: IPokemonCard[];
  headerData = {
    title: 'Pokedex 4'
  };
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemons = this.pokemonsService.pokemons;
  }

}
