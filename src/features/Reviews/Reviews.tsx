import React from 'react';
import RadioSplitter from '../FormElements/RadioSplitter';
import RadioToggle from '../FormElements/RadioToggle';

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <form className='reviews__form'>
        <RadioToggle
          name='toggle'
          labels={['1', '2', '3', '4']}
          count={5} />
        <RadioSplitter
          name='splitter'
          labels={['1', '2', '3', '4']}
          count={5} />
      </form>
    </section>
  );
};

export default  Reviews;