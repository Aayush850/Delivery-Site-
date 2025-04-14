import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import { services } from "./data/services";
import { FaStar } from "react-icons/fa";
import { testimonials } from "./data/testimonials";
import TestimonialsCard from "./components/TestimonialsCard";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp } from "./utils/animationConfig";

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div>
      <Navbar setIsSideBarOpen={setIsSideBarOpen} />

      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      {/* Hero Section */}
      <section
        className="custom-container pt-[90px]  space-y-16 md:flex md:items-center md:gap-8"
        id="home"
      >
        <motion.div {...fadeInUp} className="space-y-8 md:w-1/2">
          <h1 className="text-4xl text-secondary md:text-6xl">
            <span className="font-bold">Home Delivery </span>
            From Stores Near You
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            natus deleniti architecto. Ipsa cum, veritatis in ullam, corrupti
            explicabo, nesciunt vero error nostrum libero dolor.
          </p>
          <button className="btn-primary">Download App</button>
        </motion.div>
        <motion.div {...fadeInUp} className="md:w-1/2">
          <img src="delivery.svg" alt="" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="custom-container pt-[90px]" id="services">
        <motion.div {...fadeInUp} className="space-y-3">
          <h4 className="text-primary font-bold text-2xl text-center">
            Delivery Services
          </h4>
          <h1 className="text-4xl text-center font-bold text-secondary">
            All Essentials You Need
          </h1>
        </motion.div>
        <div className="space-y-8 pt-[90px] md:grid md:grid-cols-3 md:gap-8">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            );
          })}
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="custom-container pt-[90px] space-y-16 md:flex md:gap-8 md:items-center"
        id="about-us"
      >
        <motion.div {...fadeInUp} className="md:w-1/2">
          <img src="delivery-address.svg" alt="" />
        </motion.div>
        <motion.div {...fadeInUp} className="space-y-8 md:w-1/2">
          <h3 className="text-primary font-semibold text-2xl">About Us</h3>
          <h2 className="text-secondary text-4xl font-bold">
            On-time Delivery and Customer Satisfaction
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <motion.div {...fadeInUp} className="flex items-center gap-4">
            <h5 className="text-secondary text-xl font-bold">Rating 4.8</h5>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FaStar key={index} className="text-yellow-600" />;
              })}
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="bg-primary flex flex-wrap justify-around items-center rounded-lg p-4 gap-8 "
          >
            <div>
              <h4 className="text-3xl font-bold text-white">1M+</h4>
              <h5 className="text-xl font-semibold text-white">Download</h5>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">234K+</h4>
              <h5 className="text-xl font-semibold text-white">Happy Users</h5>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">34K+</h4>
              <h5 className="text-xl font-semibold text-white">Reviews</h5>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Fast Delivery Section */}
      <section
        className="custom-container pt-[90px] space-y-16 md:flex md:gap-8 md:items-center"
        id="how-it-works"
      >
        <motion.div {...fadeInUp} className="md:w-1/2 md:order-1">
          <img src="on-the-way.svg" alt="" />
        </motion.div>
        <motion.div {...fadeInUp} className="space-y-8 md:w-1/2">
          <h3 className="text-primary font-semibold text-2xl">Fast Delivery</h3>
          <h2 className="text-secondary text-4xl font-bold">
            Order Now, Receive Within 30mins
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi
            quas impedit. Vel, ab aspernatur.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section
        className="custom-container pt-[90px] space-y-16 "
        id="testimonials"
      >
        <motion.div {...fadeInUp} className="space-y-8">
          <h3 className="text-primary font-semibold text-2xl text-center">
            Testimonials
          </h3>
          <h2 className="text-secondary text-4xl font-bold text-center">
            What Our Users Say
          </h2>
        </motion.div>
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonialsCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                image={testimonial.image}
              />
            );
          })}
        </div>
      </section>

      {/* Partners Section */}
      <motion.section
        {...fadeInUp}
        className="custom-container py-[90px] md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4"
      >
        <div className="flex justify-center items-center">
          <img src="src/assets/images/partner-1.svg" alt="" />
        </div>

        <div className="flex justify-center items-center">
          <img src="src/assets/images/partner-2.svg" alt="" />
        </div>

        <div className="flex justify-center items-center">
          <img src="src/assets/images/partner-3.svg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="src/assets/images/partner-4.svg" alt="" />
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
