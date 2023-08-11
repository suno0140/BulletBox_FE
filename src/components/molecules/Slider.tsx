import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderContainer } from '@components/atoms/Container';
import {
  Guide1,
  Guide2,
  Guide3,
  Guide4,
  Guide5,
  Guide6,
  Guide7,
} from '@components/atoms/Icon';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <>
          <Guide1 />
        </>
        <>
          <Guide2 />
        </>
        <>
          <Guide3 />
        </>
        <>
          <Guide4 />
        </>
        <>
          <Guide5 />
        </>
        <>
          <Guide6 />
        </>
        <>
          <Guide7 />
        </>
      </Slider>
    </SliderContainer>
  );
};

export default SimpleSlider;
