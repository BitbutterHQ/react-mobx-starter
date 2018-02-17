import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import FirstScene from 'scenes/FirstScene';
import SecondScene from 'scenes/SecondScene';

@inject('ui')
@observer
export default class Stage extends Component {
  renderView() {
    switch (this.props.ui.view) {
      case 'first':
        return <FirstScene />
      case 'second':
        return <SecondScene />
      default:
        return <FirstScene />
    }
  }

  render() {
    return (
      <div className="Stage">
        <div className="Stage__view">
          {this.renderView()}
        </div>
      </div>
    )
  }
}
