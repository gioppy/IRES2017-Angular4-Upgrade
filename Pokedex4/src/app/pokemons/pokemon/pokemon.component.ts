import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { IPokemon } from './pokemon';
import { IMove } from '../../shared/move';

import { TypeService } from '../../shared/type.service';
import { MoveService } from '../move-table/move.service';
import { IHeader } from '../../shared/header';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  providers: [MoveService]
})
export class PokemonComponent implements OnInit {
  headerData: IHeader = {
    title: ''
  };
  pokemon: IPokemon;
  weakness = {};
  moves: IMove[] = [];
  mtmns: IMove[] = [];

  constructor(private router: ActivatedRoute, private typeService: TypeService, private moveService: MoveService) { }

  ngOnInit() {
    this.router.data
      .subscribe(
        (data: Data) => {
          const currentNumber = +data['pokemon'].number;
          this.headerData = {
            title: data['pokemon'].name,
            number: currentNumber,
            types: data['pokemon'].types,
            navigation: {
              previous: currentNumber === 1 ? 151 : currentNumber - 1,
              next: currentNumber === 151 ? 1 : currentNumber + 1
            }
          };
          this.pokemon = data['pokemon'];
        },
        (error) => {
          console.log(error);
        }
      )
  }

  resistenceAccordion(isOpen: boolean) {
    this.typeService.weakness(this.pokemon.pid)
      .subscribe(
        (data) => {
          this.weakness = data;
        }
      );
  }

  movesLvAccordion(isOpen: boolean) {
    this.moveService.indexLv(this.pokemon.pid)
      .subscribe(
        (data: IMove[]) => {
          this.moves = data;
        }
      )
  }

  movesMtAccordion(isOpen: boolean) {
    this.moveService.indexMtmn(this.pokemon.pid)
      .subscribe(
        (data: IMove[]) => {
          this.mtmns = data;
        }
      )
  }

}
