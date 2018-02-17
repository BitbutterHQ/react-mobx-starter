import { observable, action } from 'mobx';

import AVAILABLE_VIEWS from 'utils/views';

export default class Ui {
  @observable view = AVAILABLE_VIEWS[0];

  @action changeView(view) {
    if (AVAILABLE_VIEWS.includes(view)) {
      this.view = view;
    }
  }
}
