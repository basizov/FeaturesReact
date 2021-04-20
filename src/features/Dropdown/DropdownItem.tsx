import React from 'react';

interface IProps {
  className?: string;
}

const DropdownItem: React.FC<IProps> = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default  DropdownItem;