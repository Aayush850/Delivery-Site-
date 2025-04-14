import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";

interface TestimonialsProps {
  name: string;
  position: string;
  image: string;
}

const TestimonialsCard: React.FC<TestimonialsProps> = ({
  name,
  position,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-8 py-8 px-8 mt-8  rounded-lg border border-gray-200 bg-white"
    >
      <div className="flex gap-3">
        {Array.from({ length: 5 }).map((_, index) => {
          return <FaStar key={index} className="text-yellow-600" />;
        })}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
        eveniet ut quaerat dolores non voluptatum nihil impedit dicta sequi.
      </p>
      <div className="flex gap-4 items-center">
        <img className="w-12 h-12 rounded-[50%]" src={image} alt="" />
        <div>
          <h6 className="text-lg text-secondary font-bold">{name}</h6>
          <p className="text-base">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsCard;
