import { IconType } from "react-icons";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuArmchair } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { LuPlug } from "react-icons/lu";
import { IoShirtOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

type Serivces = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Serivces[] = [
  {
    title: "Food",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vel distinctio accusamus, voluptatum ad non.",
    icon: IoFastFoodOutline,
  },
  {
    title: "Grocery",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vel distinctio accusamus, voluptatum ad non.",
    icon: LuShoppingBag,
  },
  {
    title: "Furniture",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vel distinctio accusamus, voluptatum ad non.",
    icon: LuArmchair,
  },
  {
    title: "Medicine",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vel distinctio accusamus, voluptatum ad non.",
    icon: GiMedicines,
  },
  {
    title: "Electronics",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vel distinctio accusamus, voluptatum ad non.",
    icon: LuPlug,
  },
  {
    title: "Clothes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vel distinctio accusamus, voluptatum ad non.",
    icon: IoShirtOutline,
  },
];
