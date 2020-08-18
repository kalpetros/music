import 'normalize.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AlbumStateProvider } from './store/AlbumContext';
import { TrackStateProvider } from './store/TrackContext';
import { Container } from './components/Container';
import { Main } from './components/Main';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Player } from './app/player/Player';
import { Albums } from './app/Albums';
import { Tracks } from './app/Tracks';

const App = () => {
  return (
    <AlbumStateProvider>
      <TrackStateProvider>
        <Container>
          <Router>
            <Main>
              <Header />
              <Layout>
                <Switch>
                  <Route path="/album/:id" component={Tracks} />
                  <Route path="/" component={Albums} />
                </Switch>
              </Layout>
            </Main>
            <Player />
          </Router>
        </Container>
      </TrackStateProvider>
    </AlbumStateProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
