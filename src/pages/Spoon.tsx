
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FoodItem, { FoodItemProps } from '@/components/FoodItem';
import { motion } from 'framer-motion';

const spoonMenuItems: Omit<FoodItemProps, 'restaurantName'>[] = [
  {
    id: 'spoon-1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with lettuce, tomato, cheese and our special sauce',
    price: 70,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spoon-2',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce, croutons, parmesan cheese with creamy caesar dressing',
    price: 80,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spoon-3',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, fresh mozzarella and basil',
    price: 120,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spoon-4',
    name: 'Grilled Chicken Sandwich',
    description: 'Grilled chicken breast with avocado, bacon, lettuce and honey mustard',
    price: 70,
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spoon-5',
    name: 'Pasta Primavera',
    description: 'Pasta with seasonal vegetables in a light cream sauce',
    price: 80,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spoon-6',
    name: 'French Fries',
    description: 'Crispy golden fries with your choice of dipping sauce',
    price: 70,
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spoon-7',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie with vanilla ice cream',
    price: 50,
    image: 'https://images2.alphacoders.com/917/917724.jpg'
  },
  {
    id: 'spoon-8',
    name: 'Iced Coffee',
    description: 'Cold brew coffee with your choice of milk and flavor',
    price: 90,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Spoon = () => {
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
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Spoon Restaurant" 
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
                Spoon
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl"
              >
                Contemporary cuisine with fresh ingredients
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
            Explore our wide variety of delicious options made with fresh ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {spoonMenuItems.map((item, index) => (
            <div key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <FoodItem {...item} restaurantName="Spoon" />
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
                      <span>9:20 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Monday</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed!</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Location</h3>
                  <p className="mb-2">Near D block, Campus west side</p>
                  <p className="text-gray-600">Campus Map Reference: SU-101</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-4">Contact</h3>
                  <p className="mb-2">Phone: +91 8295 6569 29</p>
                  <p className="text-gray-600">Email: spoon@geetauniversity.edu.in</p>
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

export default Spoon;
