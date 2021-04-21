import React from 'react';
import Radio from '../FormElements/Radio';

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <form className='reviews__form'>
        <Radio
          className='reviews__radio'
          name='choose'
          count={5} />
      </form>
    </section>
  );
};

export default  Reviews;