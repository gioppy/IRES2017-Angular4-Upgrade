import { Component, Input, OnInit } from '@angular/core';

import { IHeader } from '../shared/header';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Input() data: IHeader;
  constructor() { }

  ngOnInit() {
  }

}
