import React from 'react';
import { Route } from 'react-router';
import Home from '../../features/Home/Home';
import Navigation from '../../features/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/navigation' component={Navigation} />
    </div>
  );
}

export default  App;