import slider2 from "../../assets/2.jpg";
import slider3 from "../../assets/3.jpg";
import slider4 from "../../assets/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import '../Banner/Banner.css'
const Banner = () => {
  return (
    <div className=" md:pt-28 pt-20">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
       
        <SwiperSlide>
          <img
            src={slider2}
            alt="Slide 2"
            className="w-full md:h-[450px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="Slide 3"
            className="w-full md:h-[450px] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            alt="Slide 4"
            className="w-full md:h-[450px] "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
