import { FaHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface HeartImageProps {
  className: string;
  size: number;
}

const HeartImage: React.FC<HeartImageProps> = ({ className, size }) => {
  return (
    <div
      className={twMerge(
        "bg-custom-gradient flex items-center justify-center P-4",
        className
      )}
    >
      <FaHeart size={size} className="text-neutral-200" />
    </div>
  );
};

export default HeartImage;
