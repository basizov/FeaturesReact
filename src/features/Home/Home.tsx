import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="home">
      <Link to='/navigation'>Navigation</Link>
    </section>
  );
};

export default  Home;