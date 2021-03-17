import React from 'react';
import {Input} from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import styled from 'styled-components';
import {bookPopular} from '../data/bookPopular.js';
import BookPopular from '../components/molecules/BookPopular/BookPopular';
import harry from '../assets/img/harry.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './slider-arrow.css'

const PopularBookWrapper=styled.div`
    display:flex;
    justify-content: space-between;
    gap: 10px;
`;

const BookPopularWrapper=styled.div`
    max-width: 200px;
    min-width: 200px;
    height:300px;
    /* min-width: 200px;
    min-height:300px; */
    margin-right:10px;
`;

const CarouselWrapper=styled.div`
    width:auto;
`;

const MainPage = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    

    return ( 
        <>
            <Input placeholder="Search your favorite book and check if it is available" />
            <Heading>Popular Books</Heading>
            {/* <PopularBookWrapper>
                {bookPopular.map(item=>(
                    <BookPopular key={item.id} {...item} />
                ))}
            </PopularBookWrapper> */}
            <Slider {...settings}>
            {bookPopular.map(item=>(
                    <BookPopularWrapper key={item.id}>
                        <img src={harry} />
                        {item.title}
                    </BookPopularWrapper>
                ))} 
            </Slider>

            

        </>
     );
}
 
export default MainPage;