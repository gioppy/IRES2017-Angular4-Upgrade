import * as angular from 'angular';
import { homeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';

// upgrade strategy
import { UpgradedComponent } from './components/upgraded/upgraded.component';

// downgrade strategy
import { downgradeComponent } from '@angular/upgrade/static';
import { UserComponent } from '../app/user/user.component';

angular.module('ng1App', [])
  .component('ng1Home', homeComponent)
  .component('ng1Item', ItemComponent)
  .component('ng1Upgraded', UpgradedComponent)
  .directive('user', downgradeComponent({component: UserComponent}) as angular.IDirectiveFactory);
