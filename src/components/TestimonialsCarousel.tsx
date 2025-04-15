import { testimonials } from "../data/testimonials";
import TestimonialsCard from "./TestimonialsCard";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <div className="h-6 w-6 bg-primary rounded-full text-white text-lg flex justify-center items-center">
        <IoIosArrowForward />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <div className="h-6 w-6 bg-primary rounded-full text-white text-lg flex justify-center items-center">
        <IoIosArrowBack />
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial) => {
          return (
            <TestimonialsCard
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.image}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
