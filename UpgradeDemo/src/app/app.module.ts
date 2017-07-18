import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';

import { UserComponent } from './user/user.component';
import { ItemDirective } from './item/item.directive';

@NgModule({
  declarations: [
    UserComponent,
    ItemDirective
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [
    UserComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['ng1App'], {strictDi: true});
  }
}
