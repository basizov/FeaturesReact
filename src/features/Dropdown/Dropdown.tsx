import React, { useState } from 'react';
import DropdownHeader from './DropdownHeader';
import DropdownMenu from './DropdownMenu';

interface IProps {
  className?: string;
  header: React.ReactChild | React.ReactNode;
  headerClassName?: string;
  menuClassName?: string;
  menuClassNameActive?: string;
}

const Dropdown: React.FC<IProps> = ({
  className,
  header,
  headerClassName,
  menuClassName,
  menuClassNameActive,
  children
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={className}>
      <DropdownHeader
        className={headerClassName}
        onClick={() => setShowMenu(!showMenu)}>
        {header}</DropdownHeader>
      <DropdownMenu
        className={showMenu ? `${menuClassName} ${menuClassNameActive}` : menuClassName}>
        {children}
      </DropdownMenu>
    </div>
  );
};

export default  Dropdown;