import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../features/Dropdown/Dropdown';
import Item from '../../../features/List/Item';
import List from '../../../features/List/List';
import defaultUser from '../../../svg/defaultUser.svg';
import down from '../../../svg/down.svg';
import logout from '../../../svg/logout.svg';

interface IActive {
  activeMoreClass: string;
  activeListClass: string;
  isActive: boolean;
}

const Navigation: React.FC = () => {
  const intiailsState: IActive = {
    activeMoreClass: '',
    activeListClass: '',
    isActive: false
  };
  const [active, setActive] = useState<IActive>(intiailsState);

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__wrapper">
          <div
            className={`navigation__more ${active.activeMoreClass}`}
            onClick={() => active.isActive ? setActive(intiailsState) : setActive({
            activeMoreClass: 'navigation__more_active',
            activeListClass: 'navigation__list_active',
            isActive: true
          })}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <List className={`navigation__list ${active.activeListClass}`}>
            <Link to='/' className='navigation__link'>
              <Item className='navigation__item'>
                Главная
              </Item>
            </Link>
            <Item className='navigation__item'>Test</Item>
          </List>
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
        </div>
      </div>
    </nav>
  );
};

export default  Navigation;