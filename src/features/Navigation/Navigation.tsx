import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';
import NavigationItem from './NavigationItem';
import NavigationList from './NavigationList';
import defaultUser from '../../svg/defaultUser.svg';
import logout from '../../svg/logout.svg';

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
          <Dropdown
            className='dropdown'
            header={<img src={defaultUser} alt="userIcon" />}
            headerClassName='dropdown__header'
            menuClassName='dropdown__menu'
            menuClassNameActive='dropdown__menu_active'>
              <DropdownItem className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>Logout</span>
              </DropdownItem>
              <DropdownItem className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </DropdownItem>
              <DropdownItem className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </DropdownItem>
              <DropdownItem className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </DropdownItem>
              <DropdownItem className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </DropdownItem>
          </Dropdown>
        </NavigationList>
      </div>
    </nav>
  );
};

export default  Navigation;