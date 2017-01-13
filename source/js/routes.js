import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Contact from 'views/Contact';
import Post from 'views/Post';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  CONTACT: publicPath,
  POST: `${publicPath}post`
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
          <Route path={ publicPath } component={ App }>
              <IndexRoute component={ Contact } />
              <Route path={ routeCodes.CONTACT } component={ Contact } />
              <Route path={ routeCodes.POST } component={ Post } />
              <Route path='*' component={ NotFound } />
          </Route>
      </Router>
    );
  }
}
