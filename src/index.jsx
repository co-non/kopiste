import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Header from './views/header.jsx';
import Body from './views/body.jsx';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const App = () => (
  <Fabric>
    <Header />
    <Body />
  </Fabric>
);

ReactDOM.render(<App />, document.getElementById('app'));
