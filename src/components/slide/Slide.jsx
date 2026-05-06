import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slide.scss";

const Slide = ({ children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
        >
          {children.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;