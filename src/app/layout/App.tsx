import React from 'react';
import { Route } from 'react-router';
import CardsInCircle from '../../features/CardsInCircle/CardsInCircle';
import Home from '../../features/Home/Home';
import Reviews from '../../features/Reviews/Reviews';
import Navigation from './Navigation/Navigation';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            {/* <Navigation /> */}
            <div className="container">
              <Route exact path='/navigation' component={Navigation} />
              <Route exact path='/reviews' component={Reviews} />
              <Route exact path='/cards-in-circle' component={CardsInCircle} />
            </div>
          </>
        )} />
    </div>
  );
}

export default  App;