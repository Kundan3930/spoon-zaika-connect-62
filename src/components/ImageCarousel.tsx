
import { useState, useEffect } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: 'Delicious pizza with cheese and basil'
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: 'Gourmet meal with vegetables and sauce'
  },
  {
    src: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: 'Pasta dish with tomato sauce and herbs'
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    alt: 'Freshly made burger with fries'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Campus Food,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
              Delivered Fast
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Order delicious meals from your favorite university restaurants
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
