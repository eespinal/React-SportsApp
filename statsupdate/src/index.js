import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers';
import HomePageApp from './Components/Apps/HomePageApp';
import './index.css';

// import App from './Components/App';
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<HomePage />, document.getElementById('root'));

const render = () => ReactDOM.render(
    <Provider store={store}>
      <HomePageApp />
    </Provider>,document.getElementById('root')
  );


render();
store.subscribe(render);
