import React from 'react';
import ReactDOM from "react-dom";
import { Route } from 'react-router-dom'
import routers from './routers/index'
import './css/reset.scss'
import './css/index.scss'
import './css/base.scss';
import "babel-polyfill";
import "es6-promise/auto";
import configure from "./middleware/configureStore";
import {
  Provider
} from "react-redux";
import {
  Switch,
  HashRouter,
} from 'react-router-dom';

const store = configure({});
ReactDOM.render(<Provider  store={store}>
  <HashRouter>
    <Switch>
    {routers.map((route, i) =>
        <Route key={i} {...route} />
      )}
    </Switch>
  </HashRouter>
</Provider>, document.getElementById('root'));