import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducers from './redux/reducers'
import JobPortal from './JobPortal';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <JobPortal />
    </Provider>,
  document.getElementById('root')
);
