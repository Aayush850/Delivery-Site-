import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

interface FaqAccordianProps {
  question: string;
  answer: string;
}

const FaqAccordian: React.FC<FaqAccordianProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="flex justify-between items-center p-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-medium">{question}</p>
        <FaChevronDown
          className={`text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: contentHeight, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-8 overflow-hidden "
          >
            <div ref={contentRef} className="py-4">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordian;
