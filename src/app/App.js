import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import { Home } from './home';
import { Ads } from './home/ads';


const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/ads/:id" component={Ads} />
    </Router>
  </Provider>
);

export default App;
