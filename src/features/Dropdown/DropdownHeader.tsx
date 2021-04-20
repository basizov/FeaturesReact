import React from 'react';

interface IProps {
  className?: string;
  onClick?: () => void;
}

const DropdownHeader: React.FC<IProps> = ({className, onClick, children}) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default  DropdownHeader;