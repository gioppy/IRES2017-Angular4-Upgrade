import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../../shared/type.model';
import { TypeService } from '../../shared/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  @Input() data: Type;
  @Input() simple = false;
  @Input() index: number;
  type: Type;
  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.type = this.data;
  }

}
