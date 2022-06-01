import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi ratione, sed optio amet culpa, repellendus facere quibusdam magni soluta iusto corporis quam doloribus veritatis odit labore, nemo rem dicta?",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Tara Sutaria",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi ratione, sed optio amet culpa, repellendus facere quibusdam magni soluta iusto corporis quam doloribus veritatis odit labore, nemo rem dicta?",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Seo Yea Ji",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi ratione, sed optio amet culpa, repellendus facere quibusdam magni soluta iusto corporis quam doloribus veritatis odit labore, nemo rem dicta?",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Kim Tae Ri",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi ratione, sed optio amet culpa, repellendus facere quibusdam magni soluta iusto corporis quam doloribus veritatis odit labore, nemo rem dicta?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Client-Avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
