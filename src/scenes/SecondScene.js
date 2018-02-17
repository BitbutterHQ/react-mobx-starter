import React, { Component } from 'react';
import { inject } from 'mobx-react';

import litecoinLogo from 'assets/litecoin.svg';

@inject('ui')
export default class SecondScene extends Component {
  goToFirst = () => {
    this.props.ui.changeView('first');
  };

  render () {
    return (
      <div className="SecondScene">
        <h1>Second Scene</h1>
        <img src={ litecoinLogo } />
        <button
          onClick={this.goToFirst}
        >
          First Scene
        </button>
      </div>
    );
  }
}
