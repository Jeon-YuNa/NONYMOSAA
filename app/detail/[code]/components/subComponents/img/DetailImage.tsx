import { ProductType } from "@/app/main/components/mainComponent/productType";
import { Swiper as SwiperType } from "swiper";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import { Thumbs, EffectFade } from "swiper/modules";

const DetailImage = ({ productImage }: ProductType) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const onHover = (i: number) => {
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      console.log(i);
      thumbsSwiper.update();
      thumbsSwiper.slideTo(i);
    }
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs, EffectFade]}
        className="detailSlider"
      >
        {productImage?.map((v, i) => {
          return (
            <SwiperSlide key={v}>
              <img src={v} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={productImage?.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="detailMiniSlider mt-4"
      >
        {productImage?.map((v, i) => {
          return (
            <SwiperSlide
              key={i}
              className="!w-fit"
              onMouseEnter={() => onHover(i)}
            >
              <span className="w-20 h-20 block overflow-hidden relative">
                <img
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  src={v}
                  alt=""
                />
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default DetailImage;
