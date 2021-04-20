import React, { useEffect, useRef, useState } from 'react';
import Item from '../List/Item';
import List from '../List/List';

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
  const [showMenu, setShowMenu] = useState(false),
        targetRef = useRef<HTMLDivElement>(null);

  const handler = (e: Event) => {
    if (targetRef.current && e.target instanceof Node && !targetRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return(() => document.removeEventListener('mousedown', handler))
  });

  return (
    <div className={className} ref={targetRef}>
      <Item
        className={headerClassName}
        onClick={() => setShowMenu(!showMenu)}>
        {header}</Item>
      <List
        className={showMenu ? `${menuClassName} ${menuClassNameActive}` : menuClassName}>
        {children}
      </List>
    </div>
  );
};

export default  Dropdown;