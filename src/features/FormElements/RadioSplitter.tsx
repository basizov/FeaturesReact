import React from 'react';

interface IProps {
  className?: string;
  labelClassName?: string;
  name?: string;
  labels?:  React.ReactChild[] | React.ReactNode[] | string;
  count?: number;
}

const RadioSplitter: React.FC<IProps> = ({
  className = '',
  labelClassName = '',
  name = '',
  labels = [],
  count = 1
}) => {
  const radios = Array.from(Array(count).keys());

  return (
    <div className={`radio-splitter ${className}`}>
      {radios.map((key, i) => (
        <label
          key={key}
          className={`radio-splitter__label ${labelClassName}`}>
          <input
            className={`radio-splitter__input ${className}`}
            name={name}
            type='radio' /><span>{labels[i < labels.length ? i : labels.length - 1]}</span></label>
      ))}
    </div>
  );
};

export default  RadioSplitter;