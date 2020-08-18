import 'normalize.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from './components/Container';

const App = () => {
  return <Container></Container>;
};

ReactDOM.render(<App />, document.getElementById('root'));
