import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/views/App';
import Home from 'components/views/Home';
import About from 'components/views/About';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('app')
);
