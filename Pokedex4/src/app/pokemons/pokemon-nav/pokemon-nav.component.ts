import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-nav',
  templateUrl: './pokemon-nav.component.html',
  styleUrls: ['./pokemon-nav.component.scss'],
  host: {

  }
})
export class PokemonNavComponent implements OnInit, OnChanges {
  @Input() pid: number;
  pokemon: {icon: string; name: string} = {icon: '', name: ''};
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    /*this.pokemonService.getIcon(this.pid)
      .subscribe(
        (data) => {
          this.pokemon = data;
        }
      )*/
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pokemonService.getIcon(this.pid)
      .subscribe(
        (data) => {
          this.pokemon = data;
        }
      )
  }

}
