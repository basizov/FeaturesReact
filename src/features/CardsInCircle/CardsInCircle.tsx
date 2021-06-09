import React, { useEffect, useState } from 'react';
import Card from './Card';

interface IProps {
  cardsCount?: number;
}

const CardsInCircle: React.FC<IProps> = ({
  cardsCount = 3
}) => {
  const [cards, setCards] = useState<Array<number>>([]);
  const [ownCardsCount, setOwnCardsCount] = useState<number>(cardsCount);

  useEffect(() => {
    setCards(Array.from(Array(ownCardsCount).keys()));
  }, [ownCardsCount, setCards]);
  useEffect(() => {
    if (ownCardsCount === 0) setOwnCardsCount(cardsCount);
  }, [cardsCount, ownCardsCount, setOwnCardsCount]);

  return (
    <div className="card-in-circle--parent">
      <section className="card-in-circle">
        {cards.map((card, key) => (
          <Card key={card} idx={key + 1} cardsCount={cardsCount} onClick={() => {
            setOwnCardsCount(ownCardsCount - 1);
          }} />
        ))}
      </section>
    </div>
  );
};

export default  CardsInCircle;