import React from 'react';
import { Route } from 'react-router';
import Home from '../../features/Home/Home';
import Reviews from '../../features/Reviews/Reviews';
import Navigation from './Navigation/Navigation';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/navigation' component={Navigation} />
      <Route exact path='/reviews' component={Reviews} />
    </div>
  );
}

export default  App;