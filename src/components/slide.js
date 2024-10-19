import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Slide() {
  return (
    <div>
      <Splide options={{ type: 'loop', perPage: 1, autoplay: true }}>
        <SplideSlide>Slide 1</SplideSlide>
        <SplideSlide>Slide 2</SplideSlide>
        <SplideSlide>Slide 3</SplideSlide>
        <SplideSlide>Slide 4</SplideSlide>
        <SplideSlide>Slide 5</SplideSlide>
      </Splide>
    </div>
  );
}

export default Slide;

