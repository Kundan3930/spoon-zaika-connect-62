
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FoodItem, { FoodItemProps } from '@/components/FoodItem';
import { motion } from 'framer-motion';

const zaikaMenuItems: Omit<FoodItemProps, 'restaurantName'>[] = [
  {
    id: 'zaika-1',
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich and creamy tomato-based sauce',
    price: 170,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zaika-2',
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese cubes in a spiced tomato cream sauce',
    price: 120,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zaika-3',
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
    price: 110,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zaika-4',
    name: 'Chicken Tikka',
    description: 'Marinated chicken pieces grilled to perfection in a tandoor oven',
    price: 100,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zaika-5',
    name: 'Dal Makhani',
    description: 'Black lentils and kidney beans slow cooked with cream and butter',
    price: 70,
    image: 'https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg'
  },
  {
    id: 'zaika-6',
    name: 'Garlic Naan',
    description: 'Soft Indian bread topped with garlic and butter',
    price: 80,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zaika-7',
    name: 'Mango Lassi',
    description: 'Sweet yogurt drink blended with mango pulp and cardamom',
    price: 60,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zaika-8',
    name: 'Gulab Jamun',
    description: 'Deep-fried milk solids soaked in rose-flavored sugar syrup',
    price: 10,
    image: 'https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img.webp?v=1721036408&width=1500'
  }
];

const Zaika = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Restaurant Header */}
      <div className="pt-16">
        <div className="relative h-64 md:h-80">
          <img 
            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Zaika Restaurant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Zaika
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl"
              >
                Authentic Indian cuisine with rich spices
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our authentic Indian dishes prepared with traditional spices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {zaikaMenuItems.map((item, index) => (
            <div key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <FoodItem {...item} restaurantName="Zaika" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Hours and Info */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Hours & Information</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Tuesday - Saturday</span>
                      <span>9:00 AM - 6:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Monday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed!</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Location</h3>
                  <p className="mb-2">Near D block, campuss sqaure</p>
                  <p className="text-gray-600">Campus Map Reference: ENG-220</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-4">Contact</h3>
                  <p className="mb-2">Phone: +91 111 222 333</p>
                  <p className="text-gray-600">Email: zaika@geetauniversity.edu.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Zaika;
