import { IconType } from "react-icons";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/animationConfig";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <motion.div {...fadeInUp} className="space-y-4 ">
      <Icon className="text-6xl" />
      <h3 className="text-4xl font-semibold">{title}</h3>
      <p className="text-lg">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
