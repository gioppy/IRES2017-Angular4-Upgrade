import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../../shared/type.model';

@Component({
  selector: 'app-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.scss']
})
export class WeaknessComponent implements OnInit {
  @Input() title: string;
  @Input() types: Type[];
  constructor() { }

  ngOnInit() {
  }

}
