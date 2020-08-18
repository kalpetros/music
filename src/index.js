import 'normalize.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from './components/Container';
import { Albums } from './app/Albums';

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" component={Albums} />
        </Switch>
      </Router>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
