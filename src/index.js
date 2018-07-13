import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import setMyApp from './reducers/index';
import ContainerApp from './containers/containerApp';
import './styles/index.css';

let store = createStore(setMyApp,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <ContainerApp/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
