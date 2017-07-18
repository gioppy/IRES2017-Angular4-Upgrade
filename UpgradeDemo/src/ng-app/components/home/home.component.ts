class HomeComponentController {
  constructor() {}
  $onInit = function () {
    setTimeout(() => {
      this.title = 'Update title!!!';
    }, 3000);
  };
  handleClick = function(message) {
    console.log(message);
  }
}

export let homeComponent = {
  template: `
    <h1>{{ $ctrl.title }}</h1>
    <ng1-item title="$ctrl.title"></ng1-item>
    <user [username]="$ctrl.title" (from-outside)="$ctrl.handleClick($event)"></user>
  `,
  bindings: {
    title: '<'
  },
  controller: HomeComponentController
};
