import { Component, Input, OnInit } from '@angular/core';

import { IMove } from '../../shared/move';

@Component({
  selector: 'app-move-table',
  templateUrl: './move-table.component.html',
  styleUrls: ['./move-table.component.scss']
})
export class MoveTableComponent implements OnInit {
  @Input() type: string;
  @Input() moves: Array<IMove>;
  constructor() { }

  ngOnInit() {
  }

}
