import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { IPokemonCard } from './pokemon-card';
import { Type } from '../../shared/type.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() data: IPokemonCard;
  types: Type[] = [];
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data
      .subscribe(
        (data: Data) => {
          this.data.types.forEach((value, index) => {
            this.types.push(value);
          });
        }
      )
  }
}
