import React from 'react';
import ReactDOM from 'react-dom';
import ContainerApp from './containers/ContainerApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContainerApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
