import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import HomePage from './src/Components/HomePage';



// const store = createStore(reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());


const render = () => ReactDOM.render(
	<div>
	  <HomePage />
	</div>,
  document.getElementById('root')
);

render();
// store.subscribe(render)
