import React from 'react';
import RadioSplitter from '../FormElements/Radio/RadioSplitter';
import RadioToggle from '../FormElements/Radio/RadioToggle';
import Select from '../FormElements/Select/Select';

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
        <Select
          count={5}
          labels={['1', '2', '3', '4']} />
      </form>
    </section>
  );
};

export default  Reviews;