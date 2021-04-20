import React from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
}

const NavigationItem: React.FC<IProps> = ({className, onClick, children}) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default  NavigationItem;