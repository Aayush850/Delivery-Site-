import { FaStar } from "react-icons/fa";

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
    <div className="bg-white p-8 m-4 space-y-8 rounded-lg border border-gray-200">
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
    </div>
  );
};

export default TestimonialsCard;
