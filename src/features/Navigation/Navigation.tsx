import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <NavigationList className='navigation__list'>
          <Link to='/' className='navigation__link'>
            <NavigationItem className='navigation__item'>
              Главная
            </NavigationItem>
          </Link>
          <NavigationItem className='navigation__item'>Test</NavigationItem>
          <NavigationItem className='navigation__item'>Test</NavigationItem>
          <NavigationItem className='navigation__item'>Test</NavigationItem>
        </NavigationList>
      </div>
    </nav>
  );
};

export default  Navigation;