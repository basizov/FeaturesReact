import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../features/Dropdown/Dropdown';
import Item from '../../../features/List/Item';
import List from '../../../features/List/List';
import defaultUser from '../../../svg/defaultUser.svg';
import down from '../../../svg/down.svg';
import logout from '../../../svg/logout.svg';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <List className='navigation__list'>
          <Link to='/' className='navigation__link'>
            <Item className='navigation__item'>
              Главная
            </Item>
          </Link>
          <Item className='navigation__item'>Test</Item>
          <Dropdown
            className='dropdown'
            header={<>
              <img src={defaultUser} alt="userIcon" />
              <div className="dropdown__down">
                <img src={down} alt="downIcon" />
              </div>
            </>}
            headerClassName='dropdown__header'
            menuClassName='dropdown__menu'
            menuClassNameActive='dropdown__menu_active'>
              <Item className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>Logout</span>
              </Item>
              <Item className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </Item>
              <Item className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </Item>
              <Item className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </Item>
              <Item className='dropdown__item'>
                <img src={logout} alt="logoutIcon"/>
                <span>logout</span>
              </Item>
          </Dropdown>
        </List>
      </div>
    </nav>
  );
};

export default  Navigation;