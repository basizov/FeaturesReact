import React from 'react';

interface IProps {
  className?: string;
  labelClassName?: string;
  name?: string;
  labels?:  React.ReactChild[] | React.ReactNode[] | string;
  count?: number;
}

const RadioToggle: React.FC<IProps> = ({
  className = '',
  labelClassName = '',
  name = '',
  labels = [],
  count = 1
}) => {
  const radios = Array.from(Array(count).keys());

  return (
    <>
      {radios.map((key, i) => (
        <label
          key={key}
          className={`radio-toggle__label ${labelClassName}`}>
          <input
            className={`radio-toggle__input ${className}`}
            name={name}
            type='radio' /><span>{labels[i < labels.length ? i : labels.length - 1]}</span></label>
      ))}
    </>
  );
};

export default  RadioToggle;