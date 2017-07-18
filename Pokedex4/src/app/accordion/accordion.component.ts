import { Component, OnInit } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  items: AccordionItemComponent[] = [];
  constructor() { }

  ngOnInit() {
  }

  addItem(item: AccordionItemComponent): void {
    this.items.push(item);
  }

  closeOthers(openItem: AccordionItemComponent): void {
    this.items.forEach((item: AccordionItemComponent) => {
      if (item !== openItem) {
        item.isOpen = false;
      }
    });
  }

}
