
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Discover how QuickBite makes campus dining easier and more enjoyable
            </motion.p>
          </div>
        </div>
        
        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From easy ordering to speedy delivery, we've got all your campus dining needs covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🍔",
                  title: "Online Ordering",
                  description: "Browse menus, customize items, and place orders with just a few clicks from any device",
                  delay: 0.1
                },
                {
                  icon: "🚚",
                  title: "Campus Delivery",
                  description: "Get food delivered quickly to your location on campus, whether it's your dorm, library, or classroom",
                  delay: 0.2
                },
                {
                  icon: "⏱️",
                  title: "Order Tracking",
                  description: "Track your order status in real-time and know exactly when your food will arrive",
                  delay: 0.3
                },
                {
                  icon: "💳",
                  title: "Secure Payments",
                  description: "Pay safely with your preferred method, including credit cards and campus meal plans",
                  delay: 0.4
                },
                {
                  icon: "🔔",
                  title: "Order Notifications",
                  description: "Receive real-time updates about your order status via email, text, or app notifications",
                  delay: 0.5
                },
                {
                  icon: "⭐",
                  title: "Ratings & Reviews",
                  description: "Share your dining experiences and help other students discover great food options",
                  delay: 0.6
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                QuickBite makes ordering food on campus simple and convenient
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-10 md:space-y-0">
              {[
                {
                  step: "1",
                  title: "Choose a Restaurant",
                  description: "Browse our partner restaurants on campus and select your favorite",
                  delay: 0.1
                },
                {
                  step: "2",
                  title: "Select Your Items",
                  description: "Browse the menu and add items to your cart",
                  delay: 0.2
                },
                {
                  step: "3",
                  title: "Place Your Order",
                  description: "Review your cart, choose payment method and place your order",
                  delay: 0.3
                },
                {
                  step: "4",
                  title: "Enjoy Your Meal",
                  description: "Track your order and get notified when it's ready for pickup or delivery",
                  delay: 0.4
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center mx-4 max-w-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: step.delay }}
                    className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4"
                  >
                    {step.step}
                  </motion.div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute h-1 bg-blue-200 w-24" style={{ marginLeft: '120px' }}></div>
                  )}
                  
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: step.delay + 0.1 }}
                    className="text-xl font-bold mb-2"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: step.delay + 0.2 }}
                    className="text-gray-600 text-center"
                  >
                    {step.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Subscription Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Subscription Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Save money and enjoy additional perks with our subscription options
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Basic",
                  price: "Free",
                  description: "Perfect for occasional orders",
                  features: [
                    "Online ordering",
                    "Order tracking",
                    "Email notifications",
                    "Standard delivery fees"
                  ],
                  isPopular: false,
                  buttonText: "Current Plan",
                  delay: 0.1
                },
                {
                  name: "QuickBite Plus",
                  price: "$4.99",
                  description: "Great for frequent diners",
                  features: [
                    "All Basic features",
                    "Free delivery on orders over $15",
                    "Priority ordering during peak times",
                    "Exclusive weekly deals",
                    "24/7 customer support"
                  ],
                  isPopular: true,
                  buttonText: "Get Started",
                  delay: 0.2
                },
                {
                  name: "QuickBite Premium",
                  price: "$9.99",
                  description: "For daily campus eaters",
                  features: [
                    "All Plus features",
                    "Free delivery on all orders",
                    "10% cashback on every purchase",
                    "Skip-the-line privileges",
                    "Early access to new restaurants",
                    "Monthly food credit"
                  ],
                  isPopular: false,
                  buttonText: "Get Started",
                  delay: 0.3
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: plan.delay }}
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
                    plan.isPopular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Free" && (
                        <span className="text-gray-500 ml-1">/month</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.isPopular ? "default" : "outline"} 
                      className="w-full"
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center">What Students Are Saying</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "QuickBite has saved me so much time between classes. I can order ahead and pick up my lunch without waiting in those insane cafeteria lines!",
                  name: "Jessica K.",
                  title: "Engineering Student",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.1
                },
                {
                  quote: "As a grad student teaching assistant, my schedule is packed. QuickBite delivers right to my department building when I don't have time for a lunch break.",
                  name: "Marcus T.",
                  title: "Graduate Assistant",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.2
                },
                {
                  quote: "The order notifications are super helpful! I know exactly when my food is ready so I can time my break perfectly. The app is so easy to use too.",
                  name: "Aisha M.",
                  title: "Business Student",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.3
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: testimonial.delay }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try QuickBite?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-blue-100">
                Join thousands of students enjoying convenient campus dining today
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-md transition-all"
                  asChild
                >
                  <a href="/signup">Get Started</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md transition-all"
                  asChild
                >
                  <a href="/contact">Contact Sales</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
