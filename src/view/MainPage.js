import React from 'react';
import {Input} from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import styled from 'styled-components';
import {bookPopular} from '../data/bookPopular.js';
import BookPopular from '../components/molecules/BookPopular/BookPopular';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const PopularBookWrapper=styled.div`
    display:flex;
    justify-content: space-between;
    gap: 10px;
`;

const BookPopularWrapper=styled.div`
    width: 200px;
    height:300px;
    background-color: grey;
`;

const CarouselWrapper=styled.div`
    width:100%;
`;

const MainPage = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return ( 
        <>
            <Input placeholder="Search your favorite book and check if it is available" />
            <Heading>Popular Books</Heading>
            {/* <PopularBookWrapper>
                {bookPopular.map(item=>(
                    <BookPopular key={item.id} {...item} />
                ))}
            </PopularBookWrapper> */}

            <CarouselWrapper>
            <Swiper
                spaceBetween={3}
                slidesPerView={4}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {bookPopular.map(item=>(
                    <SwiperSlide key={item.id}><BookPopularWrapper>{item.title}</BookPopularWrapper></SwiperSlide>
                ))} 
            </Swiper>
            </CarouselWrapper>
            

        </>
     );
}
 
export default MainPage;