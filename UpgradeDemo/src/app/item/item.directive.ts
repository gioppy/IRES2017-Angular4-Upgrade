import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'app-item'
})
export class ItemDirective extends UpgradeComponent{
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ng1Upgraded', elementRef, injector);
  }
}