import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Card from "./Card";

const Slider = ({ products }) => {
    return (
        <Swiper
            spaceBetween={4}
            slidesPerView={2}
            loop
            centeredSlides
            className="my-1"
        >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <Card product={product} />
                </SwiperSlide>
            ))}
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <Card product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
