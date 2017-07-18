import { Component, Input, OnInit } from '@angular/core';
import { AbilityService } from './ability.service';
import { Ability } from './ability';

@Component({
  selector: 'app-ability',
  template: `{{ ability?.name }}`,
  styleUrls: ['./ability.component.scss'],
  providers: [AbilityService]
})
export class AbilityComponent implements OnInit {
  @Input() data: number;
  ability: Ability;
  constructor(private abilityService: AbilityService) { }

  ngOnInit() {
    this.abilityService.get(+this.data)
      .subscribe(
        (result: Ability) => {
          this.ability = new Ability(result.aid, result.name);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
