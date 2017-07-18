class ItemComponentController {
  constructor() {
    console.log('Constructiong ItemComponent');
  }
}

export let ItemComponent = {
  template: `<p>Item component: <strong>{{ $ctrl.title }}</strong></p>`,
  bindings: {
    'title': '<'
  },
  controller: ItemComponentController
};
