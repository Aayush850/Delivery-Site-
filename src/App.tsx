import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import { services } from "./data/services";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp } from "./utils/animationConfig";
import TestimonialCarousel from "./components/TestimonialsCarousel";
import FaqAccordian from "./components/FaqAccordian";
import { faqs } from "./data/faqs";

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
        className="custom-container pt-[90px] lg:pt-[150px] md:grid md:grid-cols-2 place-items-center gap-16  md:space-y-0 space-y-16"
        id="home"
      >
        <motion.div {...fadeInUp} className="space-y-8">
          <h1 className="text-4xl text-secondary md:text-5xl lg:text-6xl">
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
        <motion.div {...fadeInUp}>
          <img src="delivery.svg" alt="" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        className="custom-container pt-[90px] lg:pt-[150px]
"
        id="services"
      >
        <motion.div {...fadeInUp} className="space-y-3">
          <h4 className="text-primary font-bold text-2xl md:text-3xl text-center">
            Delivery Services
          </h4>
          <h1 className="text-3xl md:text-4xl text-center font-bold text-secondary">
            All Essentials You Need
          </h1>
        </motion.div>
        <div
          className="space-y-8 pt-[90px] lg:pt-[150px]
 md:grid md:grid-cols-3 md:gap-8"
        >
          {services.map((service, index) => {
            return <ServiceCard key={index} {...service} />;
          })}
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="custom-container pt-[90px] lg:pt-[150px]
  md:grid md:grid-cols-2 place-items-center gap-16 space-y-16 md:space-y-0"
        id="about-us"
      >
        <motion.div {...fadeInUp}>
          <img src="delivery-address.svg" alt="" />
        </motion.div>
        <motion.div {...fadeInUp} className="space-y-8 ">
          <h3 className="text-primary font-semibold text-2xl md:text-3xl">
            About Us
          </h3>
          <h2 className="text-secondary text-3xl md:text-4xl font-bold">
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
        className="custom-container pt-[90px] lg:pt-[150px]
  md:grid md:grid-cols-2 place-items-center gap-16 space-y-16 md:space-y-0 "
        id="how-it-works"
      >
        <motion.div {...fadeInUp} className=" md:order-1">
          <img src="on-the-way.svg" alt="" />
        </motion.div>
        <motion.div {...fadeInUp} className="space-y-8">
          <h3 className="text-primary font-semibold text-2xl md:text-3xl">
            Fast Delivery
          </h3>
          <h2 className="text-secondary text-3xl md:text-4xl font-bold">
            Order Now, Receive Within 30mins
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            tempora cupiditate eos natus hic! Molestiae nostrum voluptatibus
            repellat voluptate ut, odio veniam optio quas eveniet, porro unde,
            enim deleniti hic quibusdam distinctio? Ab, accusamus. Quo autem
            enim adipisci, nulla illum expedita quaerat in? Provident harum
            laborum animi aliquam molestiae earum!
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section
        className="custom-container pt-[90px] lg:pt-[150px]
  space-y-16 "
        id="testimonials"
      >
        <motion.div {...fadeInUp} className="space-y-8">
          <h3 className="text-primary font-semibold text-2xl md:text-3xl text-center">
            Testimonials
          </h3>
          <h2 className="text-secondary text-3xl md:text-4xl font-bold text-center">
            What Our Users Say
          </h2>
        </motion.div>
        <motion.div {...fadeInUp}>
          <TestimonialCarousel />
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section
        className="custom-container pt-[90px] lg:pt-[150px]
  space-y-16 "
        id="testimonials"
      >
        <motion.div {...fadeInUp} className="space-y-8">
          <h3 className="text-primary font-semibold text-2xl md:text-3xl text-center">
            FAQs
          </h3>
          <h2 className="text-secondary text-3xl md:text-4xl font-bold text-center">
            Your Questions, Answered
          </h2>
        </motion.div>
        <motion.div {...fadeInUp} className="space-y-4">
          {faqs.map((faq, index) => {
            return <FaqAccordian key={index} {...faq} />;
          })}
        </motion.div>
      </section>

      {/* Partners Section */}
      <motion.section
        {...fadeInUp}
        className="custom-container py-[150px] md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-4"
      >
        <div className="flex justify-center items-center">
          <img src="partner-1.svg" alt="" />
        </div>

        <div className="flex justify-center items-center">
          <img src="partner-2.svg" alt="" />
        </div>

        <div className="flex justify-center items-center">
          <img src="partner-3.svg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src="partner-4.svg" alt="" />
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
