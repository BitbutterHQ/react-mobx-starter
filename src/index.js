import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Application from 'components/Application';
import registerServiceWorker from './registerServiceWorker';

import stores from 'stores';

ReactDOM.render(
  <Provider {...stores}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
