import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Home: React.FC = () => {
  return (
    <section className="home">
      <Link to='/navigation'>Navigation</Link>
      <Link to='/reviews'>Reviews</Link>
      <Loading />
    </section>
  );
};

export default  Home;