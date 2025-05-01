
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import RestaurantCard from '@/components/RestaurantCard';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel />
      </section>
      
      {/* Restaurant Selection */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Restaurant</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover delicious meals from our campus restaurants and order with just a few clicks
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RestaurantCard
            name="Spoon"
            description="Contemporary cuisine with fresh ingredients and global flavors."
            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            path="/spoon"
            delay={0.2}
          />
          <RestaurantCard
            name="Zaika"
            description="Authentic Indian dishes with rich spices and aromatic flavors."
            image="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            path="/zaika"
            delay={0.4}
          />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose QuickBite?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make campus dining convenient, fast and delicious
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "Get your food delivered quickly to your location on campus",
                delay: 0.2
              },
              {
                icon: "🍔",
                title: "Quality Food",
                description: "Enjoy delicious meals from the best campus restaurants",
                delay: 0.4
              },
              {
                icon: "📱",
                title: "Easy Ordering",
                description: "Order with just a few clicks and track your delivery in real-time",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Sign up now and get your favorite campus food delivered to your door
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/signup" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-md transition-all btn-hover"
              >
                Sign Up Now
              </a>
              <a 
                href="/login" 
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md transition-all btn-hover"
              >
                Login
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
