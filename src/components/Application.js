import React, { Component } from 'react';
import 'styles/App.scss';

import Stage from 'components/Stage';

export default class Application extends Component {
  render() {
    return (
      <div className="App desktop">
        <div className="App__content">
          <Stage />
        </div>
      </div>
    );
  }
}
