import React from 'react';

interface IProps {
  className?: string;
  labelClassName?: string;
  name?: string;
  labels?:  React.ReactChild[] | React.ReactNode[];
  count?: number;
}

const Radio: React.FC<IProps> = ({
  className,
  labelClassName,
  name,
  labels = [],
  count = 1
}) => {
  const radios = Array.from(Array(count).keys())

  return (
    <>
      {radios.map((key, i) => (
        <label
          key={key}
          className={labelClassName}>
          {labels[i < labels.length ? i : labels.length]}<input className={className} name={name} type='radio' /></label>
      ))}
    </>
  );
};

export default  Radio;