import React, { Component } from 'react';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import bitcoinLogo from 'assets/bitcoin.svg';

@inject('ui')
@observer
export default class FirstScene extends Component {
  goToSecond = () => {
    this.props.ui.changeView('second');
  };

  render() {
    return (
      <div className="FirstScene">
        <h1>First Scene</h1>
        <img src={ bitcoinLogo } />
        <button
          onClick={this.goToSecond}
        >
          Second Scene
        </button>
      </div>
    );
  }
}
