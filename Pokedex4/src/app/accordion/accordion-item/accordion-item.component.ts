import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {
  private _isOpen = false;
  @Input() title: string;
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  get isOpen(): boolean {
    return this._isOpen;
  }
  @Output() open: EventEmitter<boolean> = new EventEmitter();

  constructor(private accordion: AccordionComponent) {
    this.accordion.addItem(this);
  }

  handleAccordion(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.open.emit(this.isOpen);
  }

  ngOnInit() {
  }

}
