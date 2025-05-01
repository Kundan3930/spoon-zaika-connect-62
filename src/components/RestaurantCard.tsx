
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  name: string;
  description: string;
  image: string;
  path: string;
  delay?: number;
}

const RestaurantCard = ({
  name,
  description,
  image,
  path,
  delay = 0,
}: RestaurantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="restaurant-card group h-[400px] cursor-pointer"
    >
      <Link to={path}>
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="restaurant-overlay"></div>
          <div className="restaurant-content">
            <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-200 mb-4 max-w-xs">{description}</p>
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
              View Menu
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;
