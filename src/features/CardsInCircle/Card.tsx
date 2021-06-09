import React from 'react';

interface IProps {
  idx?: number;
  cardsCount?: number;
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: React.FC<IProps> = ({
  idx = 1,
  cardsCount = 1,
  onClick
}) => {
  const getFromCenter = (): number => {
    let res = 1;

    if (idx < cardsCount / 2 || idx === cardsCount / 2) {
      res = (Math.ceil(cardsCount / 2) - idx);
    }
    else if (idx > cardsCount / 2 + 1 || idx === cardsCount / 2 + 1) {
      res = (Math.ceil(cardsCount / 2) - (cardsCount - idx + 1));
    }
    if (cardsCount % 2 === 0) {
      res += 0.5;
    }
    return (res);
  }
  const getTranslateYSize = (): number => {
    if (idx <= cardsCount / 2) {
      return (-(100 / cardsCount / 2) * getFromCenter());
    }
    else if (cardsCount % 2 === 1 && idx < cardsCount / 2 + 1 && idx > cardsCount / 2) {
      return (0);
    }
    else if (idx > cardsCount / 2) {
      return ((100 / cardsCount / 2) * getFromCenter());
    }
    return (0);
  }
  
  const styles: React.CSSProperties = {
    transform: `translate(-50%, calc(-${100 / cardsCount}% * ${idx} + ${100 / cardsCount / 2}% + ${getTranslateYSize()}%)) rotate(40deg) skew(-20deg, -10deg) scale(.6)`
  }
  
  return (
    <div
      className="card"
      onClick={onClick}
      style={styles}>
      Hello, {idx}!
    </div>
  );
};

export default  Card;