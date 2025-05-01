
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
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
              About QuickBite
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Making campus dining convenient, fast, and delicious for university students and staff
            </motion.p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  QuickBite was founded in 2023 by a group of university students who were tired of long lines and limited food options on campus. We recognized the need for a convenient way to order food from campus restaurants without the hassle.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a simple idea has grown into a comprehensive platform connecting students and staff with their favorite campus eateries, making mealtime more efficient and enjoyable for everyone.
                </p>
                <p className="text-gray-600">
                  Today, QuickBite serves thousands of students across multiple universities, partnering with campus restaurants to provide a seamless food ordering experience.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Team collaborating" 
                  className="rounded-lg shadow-md w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              To revolutionize campus dining by creating a seamless connection between students and campus restaurants, saving time and enhancing the university experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Convenience",
                  description: "Making food ordering simple and fast for busy students and staff",
                  delay: 0.1
                },
                {
                  icon: "🌟",
                  title: "Quality",
                  description: "Partnering with the best campus restaurants to ensure delicious meals",
                  delay: 0.2
                },
                {
                  icon: "🤝",
                  title: "Community",
                  description: "Building stronger campus communities through shared dining experiences",
                  delay: 0.3
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: value.delay }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Meet the passionate individuals behind QuickBite who are dedicated to improving campus dining experiences
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.1
                },
                {
                  name: "Samantha Lee",
                  role: "CTO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.2
                },
                {
                  name: "Michael Chen",
                  role: "Head of Operations",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.3
                },
                {
                  name: "Priya Patel",
                  role: "Marketing Director",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                  delay: 0.4
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: member.delay }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
